import React from 'react';
import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import { ContainerProject } from '../Projects/styles';
import { Container  } from './styles';

const Fornecedor: React.FC = () => {
  return (
    <>
       <Navbar />
       <MenuLeft />
       <Container >
        <ContainerProject>
          <h1>Fornecedor</h1>
        </ContainerProject>
       </Container>
    </>
  )
}

export default Fornecedor;