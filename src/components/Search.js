import { useEffect, useState } from 'react';

import axios from 'axios';

function Search(props) {

    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        async function getPlaylist() {
            const res = await axios.get('https://api.spotify.com/v1/me/playlists', { headers: { 'Authorization': `Bearer ${props.token}` } });
            const data = res.data;
            setPlaylist(data.items);
        }

        getPlaylist();
    }, []);

    return (
        <div>
            Search component.
        </div>
    );

}

export default Search;