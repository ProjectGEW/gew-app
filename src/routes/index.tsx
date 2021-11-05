import React from 'react';
import { Switch } from 'react-router';

import Route from './Route';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import RegisterConsultants from '../pages/RegisterConsultants';
import Projects from '../pages/Projects';
import RegisterProjects from '../pages/RegisterProjects';
import EditProjects from '../pages/EditProjects';
import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Test from '../pages/Test';
import Test2 from '../pages/test2';
import ProjectsList from '../pages/Consultants/ProjectsList';
import ConsultantList from '../pages/Consultants/ConsultantsList';
import ConsultantProfile from '../pages/Consultants/ConsultantProfile';
import Edit from '../pages/EditProjects/Edit';
import NewLogin from '../pages/NewLogin';

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
        <Route path="/details/:numeroDoProjeto" component={Details} isPrivate/>
        <Route path="/consultants/view_projects" component={ProjectsList} isPrivate/>
        <Route path="/consultants/:numeroDoProjeto" component={ConsultantList} isPrivate/>
        <Route path="/consultants/profile/:numeroCracha" component={ConsultantProfile} isPrivate/>
        <Route path="/edit/:nm" component={Edit} isPrivate/>
        {/* Área para testes */}
        <Route path="/newlogin" component={NewLogin} />
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} isPrivate/>
    </Switch>
);

export default Routes;