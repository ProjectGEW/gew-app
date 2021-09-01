import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import GraphCircular from '../components/GraphCircular';

import { Container } from './styles';

import api from "../../service/api";

const Projects: React.FC = () => {
    async function apontarHoras() {
        const input = (document.getElementById("horas") as HTMLInputElement).value;

        const horas = parseInt(input);

        await api.put(`projetos/horas/182210`, {horas: horas});
    }

    return (
        <>
        <Navbar />
        <MenuLeft />

        <Container>
            <h1>Apontar horas</h1>
            <input type="number" id="horas" />
            <button onClick={apontarHoras}>Enviar</button>
        </Container>

        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Projects;