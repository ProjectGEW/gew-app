import React, { useState, useEffect } from "react";

import { IoIosArrowDown } from "react-icons/io";

import BR from "../../../assets/br.svg";
import EN from "../../../assets/en.svg";
import ES from "../../../assets/es.svg";
import FR from "../../../assets/fr.svg";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
    LanguageIndicator, Flag, DropdownFlag } from './styles';

const Navbar: React.FC = () => {
    const [flag, setFlag] = useState(() => {
        const storageFlag = localStorage.getItem('Language:flag');
          if(storageFlag) {
            return JSON.parse(storageFlag);
          }
        return '';
      });

      useEffect(() => {
        localStorage.setItem(
          'Language:flag',
          JSON.stringify(flag)
        )
      }, [flag]);

      const [code, setCode] = useState(() => {
        const storageCode = localStorage.getItem('Language:code');
          if(storageCode) {
            return JSON.parse(storageCode);
          }
        return '';
      });

      useEffect(() => {
        localStorage.setItem(
          'Language:code',
          JSON.stringify(code)
        )
      }, [code]);

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

    const types = ["BR", "EN", "ES", "FR"];

    const chooseFlag = (flag: String, codeFlag: String) => {
        {                        
            if(flag == "BR") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + BR + ")";
            } else if(flag == "EN") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + EN + ")";
            } else if(flag == "ES") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + ES + ")";
            } else if(flag == "FR") {
                document.getElementById("flagSelected")!.style.backgroundImage = "url(" + FR + ")";
            }

            setFlag(flag);
            setCode(codeFlag);
            window.location.reload();
            openMenuFlag()
        }
    }

    return (
        <ContainerNavbar>
                <Logo/>
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
                    <Flag type={flag} id="flagSelected" />
                    <IoIosArrowDown id="arrow" size={20} onClick={openMenuFlag}/>
                </LanguageIndicator>
                <DropdownFlag id="dropdownFlag">
                    <ul>
                        <li id="flagBR" onClick={() => chooseFlag("BR", "pt-BR")}><a>BR</a><Flag type={types[0]}/></li>
                        <li id="flagEN" onClick={() => chooseFlag("EN", "en-US")}><a>EN</a><Flag type={types[1]}/></li>
                        <li id="flagES" onClick={() => chooseFlag("ES", "es")}><a>ES</a><Flag type={types[2]}/></li>
                        <li id="flagFR" onClick={() => chooseFlag("FR", "fr-FR")}><a>FR</a><Flag type={types[3]}/></li>
                    </ul>
                </DropdownFlag>
            </ContainerNavbar>
    );
};

export default Navbar;