import styled from "styled-components";

const TrackContainer = styled.tr`
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    transition: background 0.1s, transform 0.1s;

    &:hover {
        background: #fdedef;
        transform: scale(1.01);
    }
`;

const SongContainer = styled.td`
    flex: 1;
    display: flex;
    gap: 16px;
`;

const AlbumCover = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 4px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const AlbumContainer = styled.td`
    flex: 1;
`;

const PlaylistContainer = styled.td`
    flex: 0 0 15%;
`;

function Track(props) {

    const track = props.track;
    const artist = track.artists[0];
    const album = track.album;
    const playlist = track.playlist;
    const playlistImage = playlist.images[playlist.images.length - 1].url;

    return (
        <TrackContainer className={props.className}>
            <SongContainer>
                <AlbumCover src={playlistImage}/>
                <TitleContainer>
                    <span>{track.name}</span>
                    <span>{artist.name}</span>
                </TitleContainer>
            </SongContainer>
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