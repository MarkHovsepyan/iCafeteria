const API_PATH = 'https://27628527.ngrok.io';

const request = (path, params = {}) => {
	const url = `${API_PATH}/${path}`;
	return fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
		...params
	})
		.then(res => res.json());
}

export default request;
