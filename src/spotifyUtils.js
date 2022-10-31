import axios from 'axios';

export async function getPlaylist(token) {
    const res = await axios.get('https://api.spotify.com/v1/me/playlists', { headers: { 'Authorization': `Bearer ${token}` } });
    const data = res.data;
    return data.items;
}

export async function getPlaylistItems(token, id) {
    const res = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, { headers: { 'Authorization': `Bearer ${token}` } });
    const data = res.data;
    return data.items;
}