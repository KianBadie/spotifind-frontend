function Welcome(props) {
    return (
        <div>
            <div>
                <p>Search for songs, artists, and albums across your entire playlists library.</p>
            </div>
            {props.failedAuth && 
                <p>Authorization failed. Please login again.</p>
            }
            <a href="/auth/login">LOG IN WITH SPOTIFY</a>
        </div>
    );
}

export default Welcome;