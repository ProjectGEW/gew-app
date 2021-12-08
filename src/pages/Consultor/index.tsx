import React from 'react';
import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import { ContainerProject } from '../Projects/styles';
import { Container  } from './styles';

const Consultor: React.FC = () => {
  return (
    <>
       <Navbar />
       <MenuLeft />
       <Container >
        <ContainerProject>
          <h1>Consultor</h1>
        </ContainerProject>
       </Container>
    </>
  )
}

export default Consultor;