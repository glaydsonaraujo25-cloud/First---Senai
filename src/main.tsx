import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './enhancements.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// The project changes frequently during development. Remove the previous
// application-shell service worker/cache so visitors always receive the
// newest Vercel deployment instead of stale CSS/JS from an older build.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(registration => registration.unregister()));

      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames
            .filter(name => name.startsWith('first-senai-'))
            .map(name => caches.delete(name))
        );
      }
    } catch (error) {
      console.warn('Unable to clear legacy application cache', error);
    }
  });
}
