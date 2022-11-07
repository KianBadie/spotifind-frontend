function Track(props) {

    const track = props.track;
    const playlist = track.playlist;

    return (
        <div className={props.className}>
            {track.name} : {track.album.name} - {playlist.name}
        </div>
    );

}

export default Track;