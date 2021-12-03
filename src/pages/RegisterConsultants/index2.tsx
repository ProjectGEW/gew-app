import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import { ContIcons } from '../components/MenuRight/styles';

import { BoxDados, Container } from './styles2';
import { Content, Info } from '../RegisterProjects/styles2';

interface Consultor {
    numero_cracha: number;
    nome: string;
    email: string;
    senha: string;
    cpf: number;
    telefone: string;
    valor_hora: number;
}

const RegisterConsultants: React.FC = () => {
    return (
        <>
        <Navbar />
        <MenuLeft />
    
        <Container>
            <Info>
                <h1>Cadastrar Consultor</h1>
            </Info>
            <Content>
                <BoxDados>
                    <div>
                        <h1>Dados do consultor</h1>
                    </div>
                    <div>
                        <h1>Preço por hora</h1>
                    </div>
                    <div>
                        <h1>Dados de login</h1>
                    </div>
                    <div>
                        <h1>Fornecedor</h1>
                    </div>
                </BoxDados>
            </Content>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default RegisterConsultants;