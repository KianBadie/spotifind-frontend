import styled from "styled-components";

const Icon = styled.img`
    height: 32px;
    width: auto;
`;

function Social(props) {
    
    const social = props.social;

    return (
        <a href={social.link} target='_blank' rel='noreferrer'>
            <Icon src={social.icon} alt={`${social.name} icon`}/>
        </a>
    );

}

export default Social;