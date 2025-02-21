import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './styles/reset.scss';
import './styles/global.scss';

import Modal from 'react-modal';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
