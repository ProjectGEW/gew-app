import React from 'react';

import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
    const { usuario } = useAuth();
    
    return (
        <ReactDOMRoute {...rest} render={({ location }) => {
            return isPrivate === !!usuario ? (
                <Component />
            ) : (
                <Redirect to={{ pathname: isPrivate ? "/" : "/home", state: { from: location },}}/>
            ) 
        }} />
    );
}

export default Route;