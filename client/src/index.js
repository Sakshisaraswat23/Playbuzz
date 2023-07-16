// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import Main from './Components/main';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         <App />
//     </>
// )
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Main from './Components/main';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
);
