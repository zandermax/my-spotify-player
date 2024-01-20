import './assets/index.css';
import App from './App';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
