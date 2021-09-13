import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { Container, InputGrid, Box } from './styles';

const RegisterConsultants: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
        
            <Container>
                <header>
                    <h1>Cadastrar consultor</h1>
                    <AiOutlineCaretDown />
                </header>
                <InputGrid>
                    <Box>
                        <li className="one">
                            <label>Nome:</label>
                            <input type="text" />
                        </li>
                    </Box>
                    <Box className='two'>
                        <li>
                            <label>Nome:</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label>Nome:</label>
                            <input type="text" />
                        </li>
                    </Box>
                </InputGrid>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default RegisterConsultants;