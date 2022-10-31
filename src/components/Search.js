import { useEffect, useState } from 'react';

import axios from 'axios';
import lunr from 'lunr';

function Search(props) {

    const [index, setIndex] = useState();
    const [documentDict, setDocumentDict] = useState();

    async function getPlaylist(token) {
        const res = await axios.get('https://api.spotify.com/v1/me/playlists', { headers: { 'Authorization': `Bearer ${token}` } });
        const data = res.data;
        return data.items;
    }

    async function getPlaylistItems(token, id) {
        const res = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = res.data;
        return data.items;
    }

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
            const documents = playlists.map((playlist, i) => getPlaylistItemDocuments(playlist, playlistsItems[i])).flat();

            setDocumentDict(documents.reduce((dict, document) => {
                dict[document.id] = document;
                return dict;
            }, {}));

            const index = lunr(function() {
                this.ref('id');
                this.field('name');
                this.field('album');
                this.field('artist');
                documents.forEach((trackDoc) => this.add(trackDoc));
            });

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