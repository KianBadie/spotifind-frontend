import styled from 'styled-components';

const LoginLink = styled.a`
    border-radius: 100px;
    padding: 16px 32px;
    background: #474747;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
`;

function LoginButton() {
    return (
        <LoginLink href="/auth/login">LOG IN WITH SPOTIFY</LoginLink>
    );
}

export default LoginButton;