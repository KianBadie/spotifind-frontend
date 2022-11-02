import { useEffect, useState } from 'react';
import Login from './components/Login';
import Spotifind from './components/Spotifind';

import axios from 'axios';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const authCode = new URLSearchParams(window.location.search).get('code');

    if(!authCode) return;

    axios.post('auth/token', { code: authCode })
      .then((res) => {
        const data = res.data;
        setToken(data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      { !token ? <Login/> : <Spotifind token={token} /> }
    </div>
  );

}

export default App;
