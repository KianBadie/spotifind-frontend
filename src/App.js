import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Spotifind from './components/Spotifind';

import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
	margin: auto;
	max-width: 50em;
	padding: 0 16px;
	background: #fff;
	font-family: 'Roboto', sans-serif;
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
			{renderApp()}
		</AppContainer>
	);

}

export default App;
