import React, { MouseEvent } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu, LanguageIndicator, Flag, DropdownFlag } from './styles';


const Navbar: React.FC = () => {

    function openDropDown() {
        var elemento = document.getElementById("dropdownMenu")!.style.display;

        if(elemento === 'block') {
            document.getElementById("dropdownMenu")!.style.display = 'none';
        } else {
            document.getElementById("dropdownMenu")!.style.display = 'block';
            document.getElementById("dropdownFlag")!.style.display = 'none';
        }
    }

    function openMenuFlag() {
        var elemento = document.getElementById("dropdownFlag")!.style.display;
        
        if(elemento === 'block') {
            document.getElementById("dropdownFlag")!.style.display = 'none';
        } else {
            document.getElementById("dropdownFlag")!.style.display = 'block';
            document.getElementById("dropdownMenu")!.style.display = 'none';
        }
    }

    return (
        <ContainerNavbar>
                <Logo></Logo>
                <PageIndicator>
                    <a href="./">Menu</a>
                </PageIndicator>
                <SandwichMenu onClick={openDropDown}>
                    <DropdownMenu id="dropdownMenu">
                        <ul>
                            <li><a href="./">Perfil</a></li>
                            <li><a href="./">Configurações</a></li>
                            <li><a href="./">Sair</a></li>
                        </ul>
                    </DropdownMenu>
                </SandwichMenu>
                <LanguageIndicator>
                    <Flag></Flag>
                    <IoIosArrowDown size={20} onClick={openMenuFlag}/>
                </LanguageIndicator>
                <DropdownFlag id="dropdownFlag">
                    <ul>
                        <li><a href="./">ES</a></li>
                        <li><a href="./">EN</a></li>
                        <li><a href="./">UK</a></li>
                        <li><a href="./">FR</a></li>
                    </ul>
                </DropdownFlag>
            </ContainerNavbar>
    );
};

export default Navbar;