import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

import { Container, SideContainer, ContentContainer, Box, Table } from './styles';


const Test2: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container> 
                <h1>Revisão das Informações</h1>
                <SideContainer>
                    <ContentContainer></ContentContainer>
                    <Box></Box>
                    <Box></Box>
                    <ContentContainer></ContentContainer>
                    <ContentContainer></ContentContainer>
                    <ContentContainer></ContentContainer>
                </SideContainer>
                <SideContainer>
                    <ContentContainer></ContentContainer>
                    <ContentContainer></ContentContainer>
                    <ContentContainer></ContentContainer>
                </SideContainer>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default Test2;