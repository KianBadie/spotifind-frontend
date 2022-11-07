import styled from "styled-components";

const TrackContainer = styled.div`
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    color: #5c5c5c;
    transition: background 0.1s, transform 0.1s;

    &:hover {
        background: #fdedef;
        transform: scale(1.01);
    }
`;

const AlbumCover = styled.img`
    margin-right: 16px;
    border-radius: 4px;
`;

const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const AlbumContainer = styled.div`
    flex: 1;
`;

const PlaylistContainer = styled.div`
    flex: 0 0 15%;
`;

function Track(props) {

    const track = props.track;
    const artist = track.artists[0];
    const album = track.album;
    const playlist = track.playlist;

    return (
        <TrackContainer className={props.className}>
            <AlbumCover src={playlist.images[2].url}/>
            <TitleContainer>
                <span>{track.name}</span>
                <span>{artist.name}</span>
            </TitleContainer>
            <AlbumContainer>
                <span>{album.name}</span>
            </AlbumContainer>
            <PlaylistContainer>
                <span>{playlist.name}</span>
            </PlaylistContainer>
        </TrackContainer>
    );

}

export default Track;