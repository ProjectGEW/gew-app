/* Arquivo para realizar testes gerais */
import React, { useState } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';

import { ContIcons } from '../../components/MenuRight/styles';

import { Container } from './styles';

import 'react-calendar/dist/Calendar.css';

import './estiloPopup.css';

interface IDados {
  user: number,
  horas: number,
  projeto: number
}

const Projects: React.FC = () => {      
  const [dados, setDados] = useState<IDados[]>([{user: 67235, horas: 10, projeto: 182247}]);

  function teste() {
    setDados([...dados, {user: 67235, horas: 10, projeto: 182247}]);
    localStorage.setItem('Notification', JSON.stringify(dados));
  }

  return (
    <>
    <Navbar />
    <MenuLeft />
    <Container>
      <h1>Notificação</h1>    
      <button onClick={teste}>Testar</button>
    </Container>
    <MenuRight>
      <ContIcons />
    </MenuRight>
    </>
  );
};

export default Projects;