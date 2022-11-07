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
        <Track key={track.id} track={track}/>
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