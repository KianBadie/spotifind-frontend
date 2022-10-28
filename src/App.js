import Login from './components/Login';
import Search from './components/Search';

function App() {

  const authCode = new URLSearchParams(window.location.search).get('code');

  return (
    <div>
      { !authCode ? <Login/> : <Search authCode={authCode} /> }
    </div>
  );

}

export default App;
