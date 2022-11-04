function Track(props) {

    const track = props.track;
    const playlist = track.playlist;

    return (
        <li className={props.className}>
            {track.name} : {track.album} - {playlist.name}
        </li>
    );

}

export default Track;