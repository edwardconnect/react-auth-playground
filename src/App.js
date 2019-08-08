import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './shared/routes';
import Main from './entities/main/main';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div className="App">
      <Router>
      <CookiesProvider>
        <Main/>
        <AppRoutes/>
        </CookiesProvider>
      </Router>
    </div>
  );
}

export default App;
