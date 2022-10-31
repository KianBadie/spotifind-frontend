import { useEffect, useState } from 'react';

import axios from 'axios';

function Search(props) {

    async function getPlaylist(token) {
        const res = await axios.get('https://api.spotify.com/v1/me/playlists', { headers: { 'Authorization': `Bearer ${token}` } });
        const data = res.data;
        return data.items;
    }

    async function getPlaylistItems(token, playlist) {
        const tracksUrl = playlist.tracks.href;
        const res = await axios.get(tracksUrl, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = res.data;
        return data.items;
    }

    function getPlaylistTrackDocs(playlist, playlistItems) {
        const trackDocs = playlistItems.map(playlistItem => {
            const track = playlistItem.track;
            const artist = track.artists.map(artist => artist.name);
            return {
                name: track.name,
                album: track.album.name,
                artist: artist,
                playlist: playlist.name
            }
        });
        return trackDocs;
    }

    useEffect(() => {
        async function initializeIndex() {
            const playlists = await getPlaylist(props.token);
            const playlistItems = await Promise.all(playlists.map(playlist => getPlaylistItems(props.token, playlist)));
            const trackDocs = [];
            for(let i = 0; i < playlists.length; i++) {
                trackDocs.push(...getPlaylistTrackDocs(playlists[i], playlistItems[i]));
            }
            console.log(trackDocs);
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