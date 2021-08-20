import React, { useState, useCallback } from "react";

import { IoIosArrowDown } from "react-icons/io";

import BR from "../../../assets/br.svg";
import EN from "../../../assets/en.svg";
import ES from "../../../assets/es.svg";
import UK from "../../../assets/uk.svg";
import FR from "../../../assets/fr.svg";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
    LanguageIndicator, Flag, DropdownFlag } from './styles';

const Navbar: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

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

    const types = ["", "BR", "EN", "ES", "UK", "FR"];

    const typeUsed = types[0];
    const before = types[0];

    const chooseFlag = (flag: String) => {
        {
            /*const types = [BR, EN, ES, UK, FR];

            for(let x = 0; x < types.length; x++) {
                if(flag == types[x]) {
                    document.getElementById("flagSelected")!.style.backgroundImage = "url(" + types[x] + ")";
                }
            } */

            const before = document.getElementById("flagSelected")!.style.backgroundImage;
           // alert(before);

            if(flag == "BR") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + BR + ")";
                const typeUsed = types[1];
            } else if(flag == "EN") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + EN + ")";
                const typeUsed = types[2];
            } else if(flag == "ES") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + ES + ")";
                const typeUsed = types[3];
            } else if(flag == "UK") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + UK + ")";
                const typeUsed = types[4];
            } else if(flag == "FR") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + FR + ")";
                const typeUsed = types[5];
            }
            openMenuFlag()
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
                            <li><a href="/home">Perfil</a></li>
                            <li><a href="./settings">Configurações</a></li>
                            <li><a href="/">Sair</a></li>
                        </ul>
                    </DropdownMenu>
                </SandwichMenu>
                <LanguageIndicator>
                    <Flag type={typeUsed} id="flagSelected" />
                    <IoIosArrowDown id="arrow" size={20} onClick={openMenuFlag}/>
                </LanguageIndicator>
                <DropdownFlag id="dropdownFlag">
                    <ul>
                        <li onClick={() => chooseFlag("ES")}><a>{before}</a><Flag type={before}/></li>
                        <li onClick={() => chooseFlag("EN")}><a>EN</a><Flag type="EN"/></li>
                        <li onClick={() => chooseFlag("UK")}><a>UK</a><Flag type="UK"/></li>
                        <li onClick={() => chooseFlag("FR")}><a>FR</a><Flag type="FR"/></li>
                    </ul>
                </DropdownFlag>
            </ContainerNavbar>
    );
};

export default Navbar;