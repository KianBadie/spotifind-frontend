import { useEffect, useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Spotifind from './components/Spotifind';

import axios from 'axios';

function App() {

  const [token, setToken] = useState('');
  const [failedAuth, setFailedAuth] = useState(false);

  const authCode = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    if(!authCode) return;

    setFailedAuth(false);

    axios.post('auth/token', { code: authCode })
      .then((res) => {
        setToken(res.data.access_token);
      })
      .catch((err) => {
        setFailedAuth(true);
      });
  }, [authCode]);

  return (
    <div>
      <Header/>
      {(() => {
        if(token) return <Spotifind token={token}/>
        else if(!authCode) return <Welcome failedAuth={failedAuth}/>
      })()}
    </div>
  );

}

export default App;
