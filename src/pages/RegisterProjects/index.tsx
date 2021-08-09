import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

const RegisterProjects: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
    );
};

export default RegisterProjects;