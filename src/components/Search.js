import { useState, useEffect } from 'react';

import axios from 'axios';

function Search(props) {

    const [token, setToken] = useState('');

    useEffect(() => {
        async function getToken() {
            const res = await axios.post('auth/token', { code: props.authCode });
            const data = res.data;
            setToken(data.access_token);
        }

        getToken();
    }, []);

    return (
        <div>
            Your token is {token}.
        </div>
    );

}

export default Search;