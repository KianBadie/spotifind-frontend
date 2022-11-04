import styled from 'styled-components';

const DemoGifContainer = styled.div`
    padding: 16px;
`;

const DemoGifImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
    display: block;
    object-fit: cover;
    box-shadow: 0px 0px 6px #00000026;
    transform: perspective(1000px) rotateY(350deg);
`

function DemoGif(props) {
    return (
        <DemoGifContainer className={props.className}>
            <DemoGifImg src='demo.gif' alt='Demo of using site to search playlists.'/>
        </DemoGifContainer>
    );
}

export default DemoGif;