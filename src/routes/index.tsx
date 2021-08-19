import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import RegisterConsultants from '../pages/Projects';
import Projects from '../pages/Projects';
import RegisterProjects from '../pages/RegisterProjects';
import EditProjects from '../pages/EditProjects';
import Settings from '../pages/Settings';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Menu} />
        <Route path="/projects" component={Projects} />
        <Route path="/register_projects" component={RegisterProjects} />
        <Route path="/edit_projects" component={EditProjects} />
        <Route path="/register_consultants" component={RegisterConsultants} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
    </Switch>
);

export default Routes;