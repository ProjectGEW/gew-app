import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillMinusCircle } from 'react-icons/ai';

import { Container, ContainerRegister, Info, Content, Line, Box } from './styles';

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
                                <AiFillMinusCircle />
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
                        <Box>
                            <div>
                                <label>Número do projeto:</label>
                                <input type="text" />
                                
                                <label>Título do projeto:</label>
                                <input type="text" />

                                <label>Descrição do projeto:</label>
                                <textarea />
                            </div>
                            <div>
                                <p>Ata de aprovação:</p>
                                <label htmlFor="ata">SELECIONAR ARQUIVO</label>
                                <input type="file" id="ata"/>

                                <button type="submit">Continuar</button>
                            </div>
                        </Box>
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