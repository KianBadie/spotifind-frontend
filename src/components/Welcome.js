import SiteTitle from './SiteTitle';
import LoginButton from './LoginButton';
import DemoGif from './DemoGif';

import styled from 'styled-components';
import breakpoints from '../breakpoints';

const WelcomeContainer = styled.div`
    margin: auto;
    height: 100vh;
    max-width: 80em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    @media ${breakpoints.desktop} {
        flex-direction: row;
        gap: 0px;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #5c5c5c;

    @media ${breakpoints.desktop} {
        flex: 0 0 40%;
        align-items: flex-start;
    }
`;

const WelcomeSiteTitle = styled(SiteTitle)`
    margin-bottom: 16px;

    @media ${breakpoints.desktop} {
        margin-bottom: 32px;
    }
`;

const Description = styled.p`
    margin: 0 0 32px 0;
    text-align: center;

    @media ${breakpoints.desktop} {
        margin: 0 0 64px 0;
        text-align: start;
    }
`;

const WelcomeDemoGif = styled(DemoGif)`
    @media ${breakpoints.desktop} {
        transform: perspective(1000px) rotateY(350deg);
        transform-origin: right;
    }
`;

function Welcome(props) {
    return (
        <WelcomeContainer className={props.className}>
            <DescriptionContainer>
                <WelcomeSiteTitle/>
                <Description>Search for songs, artists, and albums across your entire playlists library.</Description>
                <LoginButton/>
            </DescriptionContainer>
            <WelcomeDemoGif/>
        </WelcomeContainer>
    );
}

export default Welcome;