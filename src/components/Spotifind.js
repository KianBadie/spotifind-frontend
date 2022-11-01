import { useEffect, useState } from 'react';
import Track from './Track';

import { getPlaylist, getPlaylistItems } from '../spotifyUtils';
import SearchIndex from '../SearchIndex';

function Spotifind(props) {

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

    useEffect(() => {
        if(query.length == 0) return;

        const searchTimeout = setTimeout(() => {
            const results = searchIndex.search(query);
            setResults(results);
        }, 250);

        return () => clearTimeout(searchTimeout);
    }, [query]);

    function handleChange(e) {
        const query = e.target.value;
        setQuery(query);
    }

    const resultList = results.map(result => (
        <Track key={result.ref} track={result.document}/>
    ));

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

export default Spotifind;