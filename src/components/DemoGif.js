import styled from 'styled-components';

const DemoGifImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
`

function DemoGif() {
    return (
        <div>
            <DemoGifImg src='demo.gif' alt='Demo of using site to search playlists.'/>
        </div>
    );
}

export default DemoGif;