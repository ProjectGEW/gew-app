import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import Projeto from '../components/RegisterProject/Projeto';
import Responsavel from '../components/RegisterProject/Responsavel';
import Dinheiro from '../components/RegisterProject/Dinheiro';
import Datas from '../components/RegisterProject/Datas';

import { RiErrorWarningFill } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { Container, ContainerRegister, Info, Content, Line } from './styles';

import { ContIcons } from '../components/MenuRight/styles';
import { render } from '@testing-library/react';

const RegisterProjects: React.FC = () => {

    function trocarTela(recebe: string) {
        if(recebe === "Projeto") {
            return render(<Projeto/>);
        } else if(recebe === "Responsavel") {
            return render(<Responsavel/>);
        } else if(recebe === "Dinheiro") {
            return render(<Dinheiro/>);
        } else if(recebe === "Datas") {
            return render(<Datas/>);
        } else {
            return render(<Projeto/>);
        }
    }
    
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
                            <IoIosCheckmarkCircle onClick={() => trocarTela("Projeto")}/>
                        </div>
                        <div>
                            <p>Responsáveis</p>
                            <RiErrorWarningFill onClick={() => trocarTela("Responsavel")}/>
                        </div>
                        <div>
                            <p>R$</p>
                            <RiErrorWarningFill onClick={() => trocarTela("Dinheiro")}/>
                        </div>
                        <div>
                            <p>Datas</p>
                            <RiErrorWarningFill onClick={() => trocarTela("Datas")}/>
                        </div>
                    </Line>
                    {trocarTela} 
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