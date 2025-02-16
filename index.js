import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.js';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
reportWebVitals(console.log);
