import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import Button from '../components/Button';

import { ContIcons } from '../components/MenuRight/styles';

import { Container } from './styles';


const Projects: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container>
                <h1>Apontar horas</h1>
                <input type="text" />
                <Button text={"Enviar"} />
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default Projects;