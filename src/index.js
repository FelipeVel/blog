import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { register } from 'swiper/element/bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
register();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
