import styled from 'styled-components';
import breakpoints from '../breakpoints';

const SiteTitleContainer = styled.h1`
    margin: 0;
    font-size: 4em;

    @media ${breakpoints.tablet} {
        font-size: 6em;
    }
`;

const BlueText = styled.span`
    color: #31899d;
`;

const PinkText = styled.span`
    color: #d47a86;
`;

function SiteTitle(props) {
    return (
        <SiteTitleContainer className={props.className}>
            <BlueText>Truly</BlueText>
            <PinkText>Found</PinkText>
        </SiteTitleContainer>
    );
}

export default SiteTitle;