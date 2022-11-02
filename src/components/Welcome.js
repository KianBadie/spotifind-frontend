function Welcome(props) {
    return (
        <div>
            {props.failedAuth && 
                <p>Authorization failed. Please login again.</p>
            }
            <a href="/auth/login">Login</a>
        </div>
    );
}

export default Welcome;