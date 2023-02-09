import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.jsx';
import ReactDOM from 'react-dom';

// ESTO YA NO FUNCIONA
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

//AHORA ES ASI
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);