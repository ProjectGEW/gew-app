import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { Container } from './styles';


const RegisterConsultants: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
        
            <Container>
                <div>
                    <h1>Cadastrar consultor</h1>
                    <AiOutlineCaretDown />
                </div>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default RegisterConsultants;