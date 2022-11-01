import { useEffect, useState } from 'react';

import { getPlaylist, getPlaylistItems } from '../spotifyUtils';
import SearchIndex from '../SearchIndex';

function Search(props) {

    const [searchIndex, setSearchIndex] = useState();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function getPlaylistItemDocuments(playlist, playlistItems) {
        const documents = playlistItems.map((playlistItem, i) => {
            const track = playlistItem.track;
            const id = `${playlist.id}+${i}`;
            const artist = track.artists.map(artist => artist.name);
            return {
                id: id,
                name: track.name,
                album: track.album.name,
                artist: artist,
                playlist: playlist
            }
        });
        return documents;
    }

    useEffect(() => {
        async function init() {
            const playlists = await getPlaylist(props.token);
            const playlistsItems = await Promise.all(playlists.map(playlist => getPlaylistItems(props.token, playlist.id)));
            const documents = playlists.flatMap((playlist, i) => getPlaylistItemDocuments(playlist, playlistsItems[i]));
            const searchIndex = new SearchIndex(documents, ['name', 'album', 'artist']);
            setSearchIndex(searchIndex);
        }

        init();
    }, []);

    function handleChange(e) {
        const query = e.target.value;
        const results = searchIndex.search(query);
        setQuery(query);
        setResults(results);
    }

    const resultList = results.map(result => {
        const track = result.document;
        const playlist = track.playlist;
        return (
            <li key={result.ref}>{playlist.name} - {track.name}</li>
        );
    });

    return (
        <div>
            <input 
                type='search'
                value={query}
                onChange={handleChange}
            />
            <ul>
                {resultList}
            </ul>
        </div>
    );

}

export default Search;