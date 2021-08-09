import React from 'react';

import MenuLeft from '../components/MenuLeft';
import MenuRight from '../components/MenuRight';
import Navbar from '../components/Navbar';

import { FaEdit } from "react-icons/fa";

import { ContainerHome, Container, Left, Right } from './styles';

const Settings: React.FC = () => {
    return (
        <>
            <Navbar />
            <MenuLeft />

            <ContainerHome>                
                <Container>
                    <h1><strong>Configurações</strong> Gerais</h1>
                    <span />
                </Container>
                <Container>
                    <Left>
                        <strong>Configurações de texto</strong>
                        <p>Tamanho da fonte</p>
                    </Left>
                    <Right>
                        <div>
                            <select name="font">
                                <option value="size1">Padrão</option>
                                <option value="size2">14</option>
                                <option value="size3" selected>20</option>
                                <option value="size4">26</option>
                            </select>
                        </div>
                    </Right>
                </Container>
                <Container>
                    <Left>
                        <strong>Configurações do dashboard</strong>
                        <p>Animações</p>
                    </Left>
                    <Right>
                        <div>
                            <span />
                        </div>
                    </Right>
                </Container>
                <Container>
                    <Left>
                        <strong>Configurações da conta</strong>
                        <p>Trocar nome de usuário</p>
                        <p>Alterar sua senha</p>
                        <p>Alterar foto de perfil</p>
                        <p>Desativar notificações</p>
                    </Left>
                    <Right>
                        <div>
                            <p>
                                <input type="text" placeholder="Renato Joaquim da Silva"/>
                                <FaEdit size={20}/>
                            </p>
                            <p>
                                <input type="password" placeholder="**************"/>
                                <FaEdit size={20}/>
                            </p>
                            <p>
                                <input type="text" placeholder="foto_perfil.png"/>
                                <FaEdit size={20}/>
                            </p>
                            <span />
                        </div>
                    </Right>
                </Container>
            </ContainerHome>
            <MenuRight />
        </>
    );
};

export default Settings;