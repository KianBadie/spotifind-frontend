import SiteTitle from './SiteTitle';
import LoginButton from './LoginButton';
import DemoGif from './DemoGif';

import styled from 'styled-components';

const WelcomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WelcomeContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 32px;
`;

const DescriptionContainer = styled.div`
    flex: 0 0 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    color: #5c5c5c;
`;

const Description = styled.p`
    margin: 0;
`;

function Welcome(props) {
    return (
        <WelcomeContainer className={props.className}>
            <WelcomeContent>
                <DescriptionContainer>
                    <SiteTitle/>
                    <Description>Search for songs, artists, and albums across your entire playlists library.</Description>
                    <LoginButton/>
                </DescriptionContainer>
                <DemoGif/>
            </WelcomeContent>
        </WelcomeContainer>
    );
}

export default Welcome;