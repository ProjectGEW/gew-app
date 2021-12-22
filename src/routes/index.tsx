import React, { Suspense } from 'react';
import { Switch } from 'react-router';

import Route from './Route';

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
import ConsultantList from '../pages/Consultants/ConsultantsList/index2';
import ConsultantProfile from '../pages/Consultants/ConsultantProfile';
import Edit from '../pages/EditProjects/Edit/index2';
import NewLogin from '../pages/NewLogin';
import Home from '../pages/Home/home';
import NotFound from '../pages/NotFound';

//import Login from '../pages/Login';
//import Menu from '../pages/Menu';
//import Consultor from '../pages/Consultor';
//import Fornecedor from '../pages/Fornecedor';
//import Gestor from '../pages/Gestor';

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Switch>
        {/* Adicionar isPrivate no final de cada <Route> -> <Route ... isPrivate /> */}
        {/* Rotas gerais para todas as personas */}
        <Route path="/" exact component={NewLogin} />
        <Route path="/settings" component={Settings} isPrivate/>

        {/* Rotas para Gerente */}
        <Route path="/home" component={Home} isPrivate />
        <Route path="/projects" component={Projects} isPrivate />
        <Route path="/register_projects" component={CadastroProjeto} isPrivate />
        <Route path="/edit_projects" component={EditProjects} isPrivate />
        <Route path="/register_consultants" component={RegisterConsultants} isPrivate />
        <Route path="/dashboard/:id" component={Dashboard} isPrivate />
        <Route path="/details/:numeroDoProjeto" component={Details} isPrivate />
        <Route path="/consultants/view_projects" component={ProjectsList} isPrivate />
        <Route path="/consultants/:numeroDoProjeto" component={ConsultantList} isPrivate />
        <Route path="/consultants/profile/:numeroCracha" component={ConsultantProfile} isPrivate />
        <Route path="/edit/:nm" component={Edit} isPrivate />
        <Route path="*" component={NotFound} isPrivate />

        {/* Área para testes */}
        {/* <Route path="/oldlogin" component={Login}/> */}
        <Route path="/test" component={Test} isPrivate />
        <Route path="/test2" component={Test2} isPrivate />
      </Switch>
    </Suspense>
  )
};

export default Routes;