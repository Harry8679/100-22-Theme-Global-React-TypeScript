import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Prevent transitions on page load
document.body.classList.add('preload');
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);