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

const Routes: React.FC = () => (
    <Switch>
        {/* Adicionar isPrivate no final de cada <Route> -> <Route ... isPrivate /> */}
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Menu} />
        <Route path="/projects" component={Projects} />
        <Route path="/register_projects" component={RegisterProjects} />
        <Route path="/edit_projects" component={EditProjects} />
        <Route path="/register_consultants" component={RegisterConsultants} />
        <Route path="/settings" component={Settings} />
        <Route path="/dashboard/:id" component={Dashboard} />
        <Route path="/details/:id" component={Details} />
        <Route path="/allocate_consultants/view_projects" component={ProjectsList} />
        <Route path="/allocate_consultants/consultants/:numeroDoProjeto" component={ConsultantList} />
        <Route path="/allocate_consultants/profile/:numeroCracha" component={ConsultantProfile} />
        <Route path="/edit" component={Edit} />
        {/* Área para testes */}
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} />
    </Switch>
);

export default Routes;