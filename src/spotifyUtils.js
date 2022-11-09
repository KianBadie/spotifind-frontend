import axios from 'axios';

export async function getPlaylist(token) {

    const playlists = [];

    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const params = {
        limit: 50
    }

    let next = 'https://api.spotify.com/v1/me/playlists';
    
    while(next) {
        const res = await axios.get(next, { headers, params });
        const data = res.data;
        next = data.next;
        playlists.push( ...data.items );
    }

    return playlists;
}

export async function getPlaylistItems(token, id) {
    const res = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, { headers: { 'Authorization': `Bearer ${token}` } });
    const data = res.data;
    return data.items;
}