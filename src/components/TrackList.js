import Track from './Track';

import styled from 'styled-components';
import breakpoints from '../breakpoints';

const TrackListContainer = styled.table`
    table-layout: fixed;
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
    margin-left: 56px;

    @media ${breakpoints.tablet} {
        margin-left: 76px;
    }
`;

const AlbumHeading = styled(TableHeading)`
    display: none;

    @media ${breakpoints.tablet} {
        display: initial;
    }
`;

const PlaylistHeading = styled(TableHeading)`
    flex: 0 0 15%;
`;

function TrackList(props) {

    const tracks = props.tracks;

    const resultList = tracks.map(track => <Track key={track.playlistId} track={track}/>);

    return (
        <TrackListContainer className={props.className}>
            
            <thead>
                <TableHeader>
                    <TableHeading scope="col">
                        <SongTitle>Title</SongTitle>
                    </TableHeading>
                    <AlbumHeading scope="col">Album</AlbumHeading>
                    <PlaylistHeading scope="col">Playlist</PlaylistHeading>
                </TableHeader>
            </thead>

            <tbody>
                {resultList}
            </tbody>
            
        </TrackListContainer>
    );
}

export default TrackList;