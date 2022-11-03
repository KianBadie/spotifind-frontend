import styled from 'styled-components';

const DemoGifImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
    display: block;
    object-fit: cover;
    box-shadow: 0px 0px 6px #00000026;
    transform: perspective(1000px) rotateY(350deg);
`

function DemoGif() {
    return (
        <div>
            <DemoGifImg src='demo.gif' alt='Demo of using site to search playlists.'/>
        </div>
    );
}

export default DemoGif;