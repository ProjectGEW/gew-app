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
import ConsultantList from '../pages/Consultants/ConsultantsList/index2';
import ConsultantProfile from '../pages/Consultants/ConsultantProfile';
import Edit from '../pages/EditProjects/Edit/index2';
import Consultor from '../pages/Consultor';
import NewLogin from '../pages/NewLogin';
import Fornecedor from '../pages/Fornecedor';
import Gestor from '../pages/Gestor';

const Routes: React.FC = () => {
  return (
    <Switch>
      {/* Adicionar isPrivate no final de cada <Route> -> <Route ... isPrivate /> */}
      {/* Rotas gerais para todas as personas */}
      <Route path="/" exact component={NewLogin} />
      <Route path="/settings" component={Settings} />

      {/* Rotas para Gerente */}
      <Route path="/home" component={Menu}  />
      <Route path="/projects" component={Projects} />
      <Route path="/register_projects" component={CadastroProjeto} />
      <Route path="/edit_projects" component={EditProjects} />
      <Route path="/register_consultants" component={RegisterConsultants} />
      <Route path="/dashboard/:id" component={Dashboard} />
      <Route path="/details/:numeroDoProjeto" component={Details} />
      <Route path="/consultants/view_projects" component={ProjectsList} />
      <Route path="/consultants/:numeroDoProjeto" component={ConsultantList} />
      <Route path="/consultants/profile/:numeroCracha" component={ConsultantProfile} />
      <Route path="/edit/:nm" component={Edit} />

      {/* Rotas para o gestor */}
      <Route path="/gestor" component={Gestor} />

      {/* Rotas para o fornecedor */}
      <Route path="/fornecedor" component={Fornecedor} />
      
      {/* Rotas para o consultor */}
      <Route path="/consultor" component={Consultor} />

      {/* Área para testes */}
      <Route path="/oldlogin" component={Login}/>
      <Route path="/test" component={Test}  />
      <Route path="/test2" component={Test2} />
    </Switch>
  )
};

export default Routes;