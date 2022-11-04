import SiteTitle from './SiteTitle';
import LoginButton from './LoginButton';
import DemoGif from './DemoGif';

import styled from 'styled-components';

const WelcomeContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

const DescriptionContainer = styled.div`
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #5c5c5c;
`;

const WelcomeSiteTitle = styled(SiteTitle)`
    margin-bottom: 32px;
`;

const Description = styled.p`
    margin: 0 0 64px 0;
`;

function Welcome(props) {
    return (
        <WelcomeContainer className={props.className}>
            <DescriptionContainer>
                <WelcomeSiteTitle/>
                <Description>Search for songs, artists, and albums across your entire playlists library.</Description>
                <LoginButton/>
            </DescriptionContainer>
            <DemoGif/>
        </WelcomeContainer>
    );
}

export default Welcome;