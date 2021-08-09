import React from "react";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
    LanguageIndicator, Flag, VectorLanguage } from './styles';


const Navbar: React.FC = () => {

    function openMenuNavbar() {
        var elemento = document.getElementById("dropdownMenu")!.style.display;
        
        if(elemento === 'block') {
            document.getElementById("dropdownMenu")!.style.display = 'none';
        } else {
            document.getElementById("dropdownMenu")!.style.display = 'block';
        }
    }

    return (

        <ContainerNavbar>
                <Logo></Logo>
                <PageIndicator>
                    <a href="./">Menu</a>
                </PageIndicator>
                <SandwichMenu onClick={openMenuNavbar}>
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
                    <VectorLanguage></VectorLanguage>
                </LanguageIndicator>
            </ContainerNavbar>

    );
};

export default Navbar;