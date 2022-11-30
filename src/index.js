import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalProvider } from './context/GlobalContext'
import BaseRouter from "./router/BaseRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalProvider>
          <BaseRouter />
      </GlobalProvider>
  </React.StrictMode>
);
