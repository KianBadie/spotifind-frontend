import Track from './Track';

import styled from 'styled-components';

const TrackListOrderedList = styled.ol`
    margin: 0;
    padding: 0;
    list-style: none;
`;

function TrackList(props) {

    const tracks = props.tracks;

    const resultList = tracks.map(track => (
        <li key={track.id}>
            <Track track={track}/>
        </li>
    ));

    return (
        <div className={props.className}>
            <TrackListOrderedList>
                {resultList}
            </TrackListOrderedList>
        </div>
    );
}

export default TrackList;