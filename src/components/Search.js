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
            const trackDocs = [];
            for(const playlist of playlists) {
                const playlistItems = await getPlaylistItems(props.token, playlist);
                const playlistTrackDocs = getPlaylistTrackDocs(playlist, playlistItems);
                trackDocs.push(...playlistTrackDocs);
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