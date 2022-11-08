import styled from "styled-components";

const TrackTitleContainer = styled.td`
    display: flex;
    gap: 16px;
`;

const TrackImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 4px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
`;

const Text = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
`;

function TrackTitle(props) {

    const track = props.track;
    const artist = track.artists[0];
    const playlist = track.playlist;
    const imgSrc = playlist.images[playlist.images.length - 1].url;

    return (
        <TrackTitleContainer className={props.className}>
            <TrackImage src={imgSrc}/>
            <TextContainer>
                <Text>{track.name}</Text>
                <Text>{artist.name}</Text>
            </TextContainer>
        </TrackTitleContainer>
    );
}

export default TrackTitle;