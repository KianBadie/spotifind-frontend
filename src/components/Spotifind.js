import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Track from './Track';

import { getPlaylist, getPlaylistItems } from '../spotifyUtils';
import { getPlaylistItemDocuments } from '../utilities';
import SearchIndex from '../SearchIndex';

function Spotifind(props) {

    const [searchIndex, setSearchIndex] = useState();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const { token } = props;

    useEffect(() => {
        async function init() {
            const playlists = await getPlaylist(token);
            const playlistsItems = await Promise.all(playlists.map(playlist => getPlaylistItems(token, playlist.id)));
            const documents = playlists.flatMap((playlist, i) => getPlaylistItemDocuments(playlist, playlistsItems[i]));
            const searchIndex = new SearchIndex(documents, ['name', 'album', 'artist']);
            setSearchIndex(searchIndex);
        }

        init();
    }, [token]);

    useEffect(() => {
        if(query.length === 0) return;

        const searchTimeout = setTimeout(() => {
            const results = searchIndex.search(query);
            setResults(results);
        }, 250);

        return () => clearTimeout(searchTimeout);
    }, [query, searchIndex]);

    const resultList = results.map(result => (
        <Track key={result.ref} track={result.document}/>
    ));

    return (
        <div className={props.className}>
            <SearchBar setQuery={setQuery}/>
            <ol>
                {resultList}
            </ol>
        </div>
    );

}

export default Spotifind;