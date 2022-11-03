import { useEffect, useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Spotifind from './components/Spotifind';

import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
	height: 100vh;
	background: #fff;
`;

function App() {

	const [token, setToken] = useState('');
	const [failedAuth, setFailedAuth] = useState(false);

	const authCode = new URLSearchParams(window.location.search).get('code');

	const renderApp = () => {
		if(token) {
			return <Spotifind token={token}/>;
		} else if (authCode && !failedAuth) {
			return null;
		} else {
			return <Welcome failedAuth={failedAuth}/>;
		}
	};

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
		<AppContainer>
			<Header/>
			{renderApp()}
		</AppContainer>
	);

}

export default App;
