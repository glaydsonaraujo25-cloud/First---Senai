import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './enhancements.css';
import './accessibility.css';
import './brand.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(error => console.warn('Não foi possível registrar o modo offline', error));
  });
}
