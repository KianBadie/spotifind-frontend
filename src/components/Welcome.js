import Header from './Header';
import LoginButton from './LoginButton';
import DemoGif from './DemoGif';

import styled from 'styled-components';

const WelcomeContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WelcomeContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const DescriptionContainer = styled.div`
    height: 100%;
    color: #5c5c5c;
`;

function Welcome(props) {
    return (
        <WelcomeContainer>
            <WelcomeContent>
                <DescriptionContainer>
                    <Header/>
                    <p>Search for songs, artists, and albums across your entire playlists library.</p>
                    <LoginButton/>
                </DescriptionContainer>
                <DemoGif/>
            </WelcomeContent>
        </WelcomeContainer>
    );
}

export default Welcome;