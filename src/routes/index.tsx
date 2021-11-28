import React from 'react';
import { Switch } from 'react-router';

import Route from './Route';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import RegisterConsultants from '../pages/RegisterConsultants';
import Projects from '../pages/Projects';
import CadastroProjeto from '../pages/RegisterProjects/index2';
import EditProjects from '../pages/EditProjects';
import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard/index2';
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
        <Route path="/" exact component={NewLogin}/>
        <Route path="/home" component={Menu} />
        <Route path="/projects" component={Projects} />
        <Route path="/register_projects" component={CadastroProjeto} />
        <Route path="/edit_projects" component={EditProjects} />
        <Route path="/register_consultants" component={RegisterConsultants} />
        <Route path="/settings" component={Settings} />
        <Route path="/dashboard/:id" component={Dashboard} />
        <Route path="/details/:numeroDoProjeto" component={Details} />
        <Route path="/consultants/view_projects" component={ProjectsList} />
        <Route path="/consultants/:numeroDoProjeto" component={ConsultantList} />
        <Route path="/consultants/profile/:numeroCracha" component={ConsultantProfile} />
        <Route path="/edit/:nm" component={Edit} />
        {/* Área para testes */}
        <Route path="/oldlogin" component={Login}/>
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} />
    </Switch>
);

export default Routes;