import React, { FormEvent, FormEventHandler, MouseEvent, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu, LanguageIndicator, Flag, DropdownFlag } from './styles';


const Navbar: React.FC = () => {
    const [flag, setFlag] = useState('');

    function openDropDown() {
        var elemento = document.getElementById("dropdownMenu")!.style.display;

        if(elemento === 'block') {
            document.getElementById("dropdownMenu")!.style.display = 'none';
        } else {
            document.getElementById("dropdownMenu")!.style.display = 'block';

            document.getElementById("dropdownFlag")!.style.display = 'none';
            document.getElementById("arrow")!.style.transform = "rotate(0deg)";
        }
    }

    function openMenuFlag() {
        var elemento = document.getElementById("dropdownFlag")!.style.display;
        
        if(elemento === 'block') {
            document.getElementById("dropdownFlag")!.style.display = 'none';

            document.getElementById("arrow")!.style.transform = "rotate(0deg)";
            
        } else {
            document.getElementById("dropdownFlag")!.style.display = 'block';
            document.getElementById("dropdownMenu")!.style.display = 'none';

            document.getElementById("arrow")!.style.transform = "rotate(180deg)";
        }
    }

    async function chooseFlag(event: FormEvent<HTMLFormElement>,): Promise<void> {            
        event.preventDefault();

        alert(flag);
        setFlag("en-US");
        alert(flag);
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
                    <IoIosArrowDown id="arrow" size={20} onClick={openMenuFlag}/>
                </LanguageIndicator>
                <DropdownFlag id="dropdownFlag">
                    <ul>
                        <li><a >ES</a></li>
                        <li><a >EN</a></li>
                        <li><a >UK</a></li>
                        <li><a >FR</a></li>
                    </ul>
                </DropdownFlag>
            </ContainerNavbar>
    );
};

export default Navbar;