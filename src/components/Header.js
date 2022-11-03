import styled from 'styled-components';

const Title = styled.h1`
    margin: 0;
    color: #000;
    font-size: 6em;
`;

function Header() {
    return (
        <header>
            <Title>Spotifind</Title>
        </header>
    );
}

export default Header;