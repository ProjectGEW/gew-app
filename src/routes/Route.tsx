import React, { useState } from 'react';

import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";
import api from '../service/api';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType; 
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { usuario } = useAuth();
  const [teste, setTeste] = useState(0);

  const buscarCargo = async () => { 
    await api.get(`funcionarios/cargo/${Object.values(usuario)[0]}`).then((response) => {
      setTeste(response.data);
    });
  }

  return (
    <ReactDOMRoute {...rest} render={({ location }) => {
      if(isPrivate === !!usuario) {
          return (<Component />);
      } else {
        buscarCargo();
        if(teste === 2) {
            return (<Redirect to={{ pathname: isPrivate ? "/" : "/home", state: { from: location },}}/>)
        }
      }
    }} />
  );
}

export default Route;