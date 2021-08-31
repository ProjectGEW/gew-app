import React, { Component } from 'react';
import { Switch } from 'react-router';

import Route from './Route';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import RegisterConsultants from '../pages/Projects';
import Projects from '../pages/Projects';
import RegisterProjects from '../pages/RegisterProjects';
import EditProjects from '../pages/EditProjects';
import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Test from '../pages/Test';

const Routes: React.FC = () => (
            <Switch>
                {/* Adicionar isPrivate no final de cada <Route> -> <Route ... isPrivate /> */}
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Menu} />
                <Route path="/projects" component={Projects} />
                <Route path="/register_projects" component={RegisterProjects} />
                <Route path="/edit_projects" component={EditProjects} />
                <Route path="/register_consultants" component={RegisterConsultants} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/settings" component={Settings} />
                <Route path="/details/:id" component={Details} />
                {/* Área para testes */}
                <Route path="/test" component={Test} />
            </Switch>
);

export default Routes;