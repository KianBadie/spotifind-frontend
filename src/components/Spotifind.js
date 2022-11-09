import { useEffect, useState } from 'react';
import SiteTitle from './SiteTitle';
import SearchBar from './SearchBar';
import TrackList from './TrackList';

import styled from 'styled-components';
import breakpoints from '../breakpoints';

import { getPlaylist, getPlaylistItems } from '../spotifyUtils';
import { getPlaylistItemDocuments } from '../utilities';
import SearchIndex from '../SearchIndex';

const SpotifindContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const SpotifindSearchBar = styled(SearchBar)`
    box-sizing: border-box;
    width: 100%;

    @media ${breakpoints.mobileL} {
        width: 80%;
    }

    @media ${breakpoints.tablet} {
        width: 60%;
    }
`;

const ResultsMessage = styled.p`
    margin: 0;
`;

const SpotifindTrackList = styled(TrackList)`
    width: 100%;
`;

function Spotifind(props) {

    const [searchIndex, setSearchIndex] = useState();
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);

    const { token } = props;

    useEffect(() => {
        async function init() {
            const playlists = await getPlaylist(token);
            const playlistsItems = await Promise.all(playlists.map(playlist => getPlaylistItems(token, playlist.id)));
            const documents = playlists.flatMap((playlist, i) => getPlaylistItemDocuments(playlist, playlistsItems[i]));
            const searchIndex = new SearchIndex(documents, ['name', 'album', 'artist']);
            setSearchIndex(searchIndex);
        }

        init();
    }, [token]);

    useEffect(() => {
        if(query.trim().length === 0) return;

        const searchTimeout = setTimeout(() => {
            const results = searchIndex.search(query);
            const tracks = results.map(result => result.document.track);
            setTracks(tracks);
        }, 250);

        return () => clearTimeout(searchTimeout);
    }, [query, searchIndex]);



    return (
        <SpotifindContainer className={props.className}>
            <SiteTitle/>
            <SpotifindSearchBar setQuery={setQuery}/>
            {tracks.length > 0 && <>
                <ResultsMessage>{tracks.length} songs found in your playlist</ResultsMessage>
                <SpotifindTrackList tracks={tracks}/>
            </>}
        </SpotifindContainer>
    );

}

export default Spotifind;