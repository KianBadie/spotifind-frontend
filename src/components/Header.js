import styled from 'styled-components';

const Title = styled.h1`
    margin: 0;
    font-size: 6em;
`;

const BlueText = styled.span`
    color: #31899d;
`;

const PinkText = styled.span`
    color: #d47a86;
`;

function Header() {
    return (
        <header>
            <Title>
                <BlueText>Spoti</BlueText>
                <PinkText>find</PinkText>
            </Title>
        </header>
    );
}

export default Header;