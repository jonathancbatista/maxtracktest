import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL} >
		<App />
	</BrowserRouter>,
	 document.getElementById('root'))

serviceWorker.register();