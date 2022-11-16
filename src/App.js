import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Spotifind from './components/Spotifind';

import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
	margin: auto;
	padding: 0 16px;
	background: #fff;
	color: #5c5c5c;
	font-family: 'Roboto', sans-serif;
`;

function App() {

	const [token, setToken] = useState('');
	const [failedAuth, setFailedAuth] = useState(false);

	const urlParams = new URLSearchParams(window.location.search);
	const authCode = urlParams.get('code');
	const state = urlParams.get('state');

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

		axios.post('https://trulyfound.up.railway.app/auth/token', { code: authCode, state: state })
			.then((res) => {
				setToken(res.data.access_token);
			})
			.catch((err) => {
				setFailedAuth(true);
			});
	}, [authCode, state]);

	return (
		<AppContainer>
			{renderApp()}
		</AppContainer>
	);

}

export default App;
