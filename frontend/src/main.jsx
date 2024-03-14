import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';
import { HelmetProvider } from 'react-helmet-async';
import { UserProvider } from './contexts/UserContext.jsx';
import { ContentProvider } from './contexts/ContentContext.jsx';

// http://localhost:8080
axios.defaults.baseURL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://netflix-pied-pi.vercel.app/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ContentProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ContentProvider>
  </UserProvider>
);
