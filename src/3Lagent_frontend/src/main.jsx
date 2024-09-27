import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { CartCounterProvider } from './features/Context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartCounterProvider>
    <App />
    </CartCounterProvider>
  </React.StrictMode>,
);
