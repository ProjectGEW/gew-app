import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

//import Login from "./pages/Login";

const App: React.FC = () => {

  //Escreve GEW no console
  console.log("%cGEW", "color: #00579D; font-size: 50px");

  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;