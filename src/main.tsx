import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import { App } from './App';
import { lockApp } from './shared/lib/lockApp';
import './styles/global.css';
import './styles/unavailable.css';
import './styles/video.css';

lockApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
