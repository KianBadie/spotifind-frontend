export function getPlaylistItemDocuments(playlist, playlistItems) {
    const documents = playlistItems.map((playlistItem, i) => {
        const id = `${playlist.id}+${i}`;
        const track = playlistItem.track;
        const album = track.album;
        const artist = track.artists.flatMap(artist => artist.name.split(' '));
        return {
            id: id,
            name: track.name,
            album: album.name,
            artist: artist,
            track: {
                playlistId: id,
                ...track,
                playlist: playlist
            }
        }
    });
    return documents;
}