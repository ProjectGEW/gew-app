import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { AuthProvider } from './hooks/AuthContext';

//import Login from "./pages/Login";

const App: React.FC = (props) => {

  //Escreve no console
  // console.log("%cGEW", "color: #00579D; font-size: 50px");
  // console.log("%cCauã, Thiago, Thomas e Victor", "color: #00579D; font-size: 20px");

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