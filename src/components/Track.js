import TrackTitle from './TrackTitle';

import styled, { css } from "styled-components";
import breakpoints from '../breakpoints';

const TrackContainer = styled.tr`
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 0.8125em;
    white-space: nowrap;
    transition: background 0.1s, transform 0.1s;

    &:hover {
        background: #fdedef;
        transform: scale(1.01);
    }

    @media ${breakpoints.tablet} {
        font-size: 1em;
    }
`;

const TrackField = css`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TitleField = styled(TrackTitle)`
    ${TrackField}
`;

const AlbumField = styled.td`
    ${TrackField}
    display: none;  

    @media ${breakpoints.tablet} {
        display: initial;
    }
`;

const PlaylistField = styled.td`
    ${TrackField}
    flex: 0 0 15%;
`;

function Track(props) {

    const track = props.track;
    const album = track.album;
    const playlist = track.playlist;

    return (
        <TrackContainer className={props.className}>
            <TitleField track={track}/>
            <AlbumField>
                <span>{album.name}</span>
            </AlbumField>
            <PlaylistField>
                <span>{playlist.name}</span>
            </PlaylistField>
        </TrackContainer>
    );

}

export default Track;