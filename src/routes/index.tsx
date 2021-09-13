import React from 'react';
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
import Test2 from '../pages/test2';

const Routes: React.FC = () => (
    <Switch>
        {/* Adicionar isPrivate no final de cada <Route> -> <Route ... isPrivate /> */}
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Menu} isPrivate/>
        <Route path="/projects" component={Projects} isPrivate/>
        <Route path="/register_projects" component={RegisterProjects} isPrivate/>
        <Route path="/edit_projects" component={EditProjects} isPrivate/>
        <Route path="/register_consultants" component={RegisterConsultants} isPrivate/>
        <Route path="/settings" component={Settings} isPrivate/>
        <Route path="/dashboard/:id" component={Dashboard} isPrivate/>
        <Route path="/details/:id" component={Details} isPrivate/>
        {/* Área para testes */}
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} />
    </Switch>
);

export default Routes;