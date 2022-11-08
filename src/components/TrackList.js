import Track from './Track';

import styled from 'styled-components';

const TrackTable = styled.table`
    color: #5c5c5c;
`;

const TableHeader = styled.tr`
    display: flex;
    padding: 0px 16px;
`;

const TableHeading = styled.th`
    flex: 1;
    text-align: start;
    color: inherit;
`;

const SongTitle = styled.span`
    margin-left: 76px;
`;

const PlaylistHeading = styled(TableHeading)`
    flex: 0 0 15%;
`;

function TrackList(props) {

    const tracks = props.tracks;

    const resultList = tracks.map(track => <Track key={track.playlistId} track={track}/>);

    return (
        <TrackTable className={props.className}>

            <TableHeader>
                <TableHeading scope="col">
                    <SongTitle>Title</SongTitle>
                </TableHeading>
                <TableHeading scope="col">Album</TableHeading>
                <PlaylistHeading scope="col">Playlist</PlaylistHeading>
            </TableHeader>

            {resultList}
        </TrackTable>
    );
}

export default TrackList;