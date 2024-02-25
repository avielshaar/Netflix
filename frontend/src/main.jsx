import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';
import { HelmetProvider } from 'react-helmet-async';
import { UserProvider } from './contexts/UserContext.jsx';
import { ContentProvider } from './contexts/ContentContext.jsx';

axios.defaults.baseURL = 'http://localhost:8080';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ContentProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ContentProvider>
    </UserProvider>
  </React.StrictMode>
);
