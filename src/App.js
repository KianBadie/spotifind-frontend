import { useEffect, useState } from 'react';
import Login from './components/Login';
import Spotifind from './components/Spotifind';

import axios from 'axios';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const authCode = new URLSearchParams(window.location.search).get('code');

    async function getToken() {
      const res = await axios.post('auth/token', { code: authCode });
      const data = res.data;
      setToken(data.access_token);
    }

    if(authCode) getToken();
  }, []);

  return (
    <div>
      { !token ? <Login/> : <Spotifind token={token} /> }
    </div>
  );

}

export default App;
