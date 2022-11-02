import { useEffect, useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Spotifind from './components/Spotifind';

import axios from 'axios';

function App() {

  const [token, setToken] = useState('');
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const authCode = new URLSearchParams(window.location.search).get('code');

    if(!authCode) return;

    axios.post('auth/token', { code: authCode })
      .then((res) => {
        const data = res.data;
        setToken(data.access_token);
        setFailedAuth(false);
      })
      .catch((err) => {
        setFailedAuth(true);
      });
  }, []);

  return (
    <div>
      <Header/>
      { !token ? <Welcome failedAuth={failedAuth}/> : <Spotifind token={token} /> }
    </div>
  );

}

export default App;
