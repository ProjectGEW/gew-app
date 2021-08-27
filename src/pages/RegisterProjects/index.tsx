import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
//import Projeto from '../components/RegisterProject/Projeto';
import Responsavel from '../components/RegisterProject/Responsavel';
//import Dinheiro from '../components/RegisterProject/Dinheiro';
//import Datas from '../components/RegisterProject/Datas';

import { RiErrorWarningFill } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { Container, ContainerRegister, Info, Content, Line } from './styles';

import { ContIcons } from '../components/MenuRight/styles';

const RegisterProjects: React.FC = () => {
    
    return (
        <>
        <Navbar />
        <MenuLeft />
        <Container>
            <ContainerRegister>
                <Info>
                    <h1>Cadastrar Projeto</h1>
                </Info>
                <Content>
                    <Line>
                        <div>
                            <p>Projeto</p>
                            <IoIosCheckmarkCircle />
                        </div>
                        <div>
                            <p>Responsáveis</p>
                            <RiErrorWarningFill />
                        </div>
                        <div>
                            <p>R$</p>
                            <RiErrorWarningFill />
                        </div>
                        <div>
                            <p>Datas</p>
                            <RiErrorWarningFill />
                        </div>
                    </Line>
                    <Responsavel /> {/* Local para trocar a tela de cadastro */}
                </Content>
            </ContainerRegister>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>    
    );
};

export default RegisterProjects;