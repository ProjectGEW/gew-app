import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from '../components/GraphLiquid';


const Dashboard: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
            <MenuRight>
                <ContIcons></ContIcons>
            </MenuRight>

        </>
        );
};

export default Dashboard;