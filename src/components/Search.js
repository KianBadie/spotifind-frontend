import { useEffect, useState } from 'react';

import { getPlaylist, getPlaylistItems } from '../spotifyUtils';
import { documentsToDict, createIndex } from '../searchUtils';

function Search(props) {

    const [index, setIndex] = useState();
    const [documentDict, setDocumentDict] = useState();

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
        async function initializeIndex() {
            const playlists = await getPlaylist(props.token);
            const playlistsItems = await Promise.all(playlists.map(playlist => getPlaylistItems(props.token, playlist.id)));
            const documents = playlists.flatMap((playlist, i) => getPlaylistItemDocuments(playlist, playlistsItems[i]));
            const documentDict = documentsToDict(documents);
            const index = createIndex(documents, ['name', 'album', 'artist']);

            setDocumentDict(documentDict);
            setIndex(index);         
        }

        initializeIndex();
    }, []);

    return (
        <div>
            Search component.
        </div>
    );

}

export default Search;