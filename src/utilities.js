export function getPlaylistItemDocuments(playlist, playlistItems) {
    const documents = playlistItems.map((playlistItem, i) => {
        const id = `${playlist.id}+${i}`;
        const track = playlistItem.track;
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