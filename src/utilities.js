export function getPlaylistItemDocuments(playlist, playlistItems) {
    const documents = playlistItems.map((playlistItem, i) => {
        const id = `${playlist.id}+${i}`;
        const track = playlistItem.track;
        const artist = track.artists.flatMap(artist => artist.name.split(' '));
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