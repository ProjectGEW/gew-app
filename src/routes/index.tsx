import React, { Suspense } from 'react';
import { Switch } from 'react-router';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Projetos from '../pages/Projects';
import Detalhes from '../pages/Details';
import CadastrarProjeto from '../pages/RegisterProjects';
import CadastrarConsultores from '../pages/RegisterConsultants';
import EditarProjetos from '../pages/EditProjects';
import Configurações from '../pages/Settings';
import Dashboard from '../pages/Dashboard';
import ListaProjetosConsultores from '../pages/Consultants/ProjectsList';
import ListaConsultores from '../pages/Consultants/ConsultantsList';
import PerfilConsultores from '../pages/Consultants/ConsultantProfile';
import EditaProjetoSelecionado from '../pages/EditProjects/Edit';
import Test from '../pages/Test';
import Test2 from '../pages/test2';
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
        {/* Rotas gerais para todas as personas */}
        <Route path="/" exact component={Login} />
        <Route path="/settings" component={Configurações} isPrivate />

        {/* Rotas para Gerente */}
        <Route path="/home" component={Home} isPrivate />
        <Route path="/projects" component={Projetos} isPrivate />
        <Route path="/register_projects" component={CadastrarProjeto} isPrivate />
        <Route path="/edit_projects" component={EditarProjetos} isPrivate />
        <Route path="/register_consultants" component={CadastrarConsultores} isPrivate />
        <Route path="/dashboard/:id" component={Dashboard} isPrivate />
        <Route path="/details/:numeroDoProjeto" component={Detalhes} isPrivate />
        <Route path="/consultants/view_projects" component={ListaProjetosConsultores} isPrivate />
        <Route path="/consultants/:numeroDoProjeto" component={ListaConsultores} isPrivate />
        <Route path="/consultants/profile/:numeroCracha" component={PerfilConsultores} isPrivate />
        <Route path="/edit/:numeroProjeto" component={EditaProjetoSelecionado} isPrivate />

        {/* Área para testes */}
        <Route path="/test" component={Test} isPrivate />
        <Route path="/test2" component={Test2} isPrivate />
        <Route path="*" component={NotFound} isPrivate />
      </Switch>
    </Suspense>
  )
};

export default Routes;