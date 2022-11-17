import Social from "./Social";

import styled from 'styled-components';

import socials from "../socials";

const FooterContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4.5em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
`;

function Footer(props) {

    const socialLinks = socials.map(social => (
        <Social key={social.name} social={social}/>
    ));

    return (
        <FooterContainer>
            {socialLinks}
        </FooterContainer>
    );

}

export default Footer;