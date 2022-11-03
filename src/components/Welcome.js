import Header from './Header';

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

const LoginButton = styled.a`
    border-radius: 100px;
    padding: 16px 32px;
    background: #474747;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
`;

function Welcome(props) {
    return (
        <WelcomeContainer>
            <WelcomeContent>
                <DescriptionContainer>
                    <Header/>
                    <p>Search for songs, artists, and albums across your entire playlists library.</p>
                    <LoginButton href="/auth/login">LOG IN WITH SPOTIFY</LoginButton>
                </DescriptionContainer>
            </WelcomeContent>
        </WelcomeContainer>
    );
}

export default Welcome;