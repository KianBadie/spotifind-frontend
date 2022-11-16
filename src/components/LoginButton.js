import styled from 'styled-components';

const LoginLink = styled.a`
    border-radius: 100px;
    padding: 16px 32px;
    background: #5c5c5c;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
`;

function LoginButton(props) {
    return (
        <LoginLink href="/auth/login" className={props.className}>LOG IN WITH SPOTIFY</LoginLink>
    );
}

export default LoginButton;