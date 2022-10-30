import { useEffect, useState } from 'react';
import Login from './components/Login';
import Search from './components/Search';

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
      { !token ? <Login/> : <Search token={token} /> }
    </div>
  );

}

export default App;
