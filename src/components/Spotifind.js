import { useEffect, useState } from 'react';
import Track from './Track';

import { getPlaylist, getPlaylistItems } from '../spotifyUtils';
import { getPlaylistItemDocuments } from '../utilities';
import SearchIndex from '../SearchIndex';

function Spotifind(props) {

    const [searchIndex, setSearchIndex] = useState();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

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
            <ol>
                {resultList}
            </ol>
        </div>
    );

}

export default Spotifind;