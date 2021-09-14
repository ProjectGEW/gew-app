import React from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container } from './style';



const ConsultantProfile: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container> 
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default ConsultantProfile;