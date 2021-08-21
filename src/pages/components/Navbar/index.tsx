import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

import BR from "../../../assets/br.svg";
import EN from "../../../assets/en.svg";
import ES from "../../../assets/es.svg";
import FR from "../../../assets/fr.svg";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
    LanguageIndicator, Flag, DropdownFlag, HistoricPage } from './styles';

const Navbar: React.FC = () => {
  const [language] = useState(() => {
    const storageFlag = localStorage.getItem('Language');

      if(storageFlag) {
        return JSON.parse(storageFlag);
      } 

    return 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem(
      'Language',
      JSON.stringify(language)
    )
  }, [language]);

  const location = useLocation();
  //const pathname = window.location.pathname;
  const [page, setPage] = useState("");

  const historicPage = () => {
    if (location.pathname == "/home") {
      document.getElementById("home")!.style.display = "none";
      document.getElementById("projects")!.style.display = "none";
      setPage("Home");
      
    } else if (location.pathname == "/projects") {
      document.getElementById("projects")!.style.display = "none";
      setPage("Projetos");

    } else if (location.pathname == "/Dashboard") {
      setPage("Dashboards");
    }
  };

  useEffect(() => {
    historicPage();
  }, [historicPage]);

  function openDropDown() {
    var elemento = document.getElementById("dropdownMenu")!.style.display;

    if (elemento === "block") {
      document.getElementById("dropdownMenu")!.style.display = "none";
    } else {
      document.getElementById("dropdownMenu")!.style.display = "block";

      document.getElementById("dropdownFlag")!.style.display = "none";
      document.getElementById("arrow")!.style.transform = "rotate(0deg)";
    }
  }

  function openMenuFlag() {
    var elemento = document.getElementById("dropdownFlag")!.style.display;

    if (elemento === "block") {
      document.getElementById("dropdownFlag")!.style.display = "none";

      document.getElementById("arrow")!.style.transform = "rotate(0deg)";
    } else {
      document.getElementById("dropdownFlag")!.style.display = "block";
      document.getElementById("dropdownMenu")!.style.display = "none";

      document.getElementById("arrow")!.style.transform = "rotate(180deg)";
    }
  }

  const types = ["BR", "EN", "ES", "FR"];

  const chooseFlag = (flag: String, codeFlag: String) => {{       
    if(flag == "BR") {
        document.getElementById("flagSelected")!.style.backgroundImage = "url(" + BR + ")";
    } else if(flag == "EN") {
        document.getElementById("flagSelected")!.style.backgroundImage = "url(" + EN + ")";
    } else if(flag == "ES") {
        document.getElementById("flagSelected")!.style.backgroundImage = "url(" + ES + ")";
    } else if(flag == "FR") {
        document.getElementById("flagSelected")!.style.backgroundImage = "url(" + FR + ")";
    }

    let selected = {flag: flag, code: codeFlag}
    localStorage.setItem('Language', JSON.stringify(selected));

    window.location.reload();
    openMenuFlag()
  }}

  return (
    <ContainerNavbar onLoad={historicPage}>
      <Logo></Logo>
      <PageIndicator id="pageIndicator">
        <div id="home">
          <a href="/home">Home</a>
        </div>
        <div id="projects">
          <a href="/projects">Projetos</a>
        </div>
        <div id="page">
          <HistoricPage localDaRota={!!location.pathname}>{page}</HistoricPage>
        </div>
      </PageIndicator>
      <SandwichMenu onClick={openDropDown}>
        <DropdownMenu id="dropdownMenu">
          <ul>
            <li>
              <a href="/home">Perfil</a>
            </li>
            <li>
              <a href="./settings">Configurações</a>
            </li>
            <li>
              <a href="/">Sair</a>
            </li>
          </ul>
        </DropdownMenu>
      </SandwichMenu>
      <LanguageIndicator>
        <Flag type={language.flag} id="flagSelected" />
        <IoIosArrowDown id="arrow" size={20} onClick={openMenuFlag}/>
      </LanguageIndicator>
        <DropdownFlag id="dropdownFlag">
          <ul>
            <li id="flagBR" onClick={() => chooseFlag("BR", "pt-BR")}><a>BR</a><Flag type={"BR"}/></li>
            <li id="flagEN" onClick={() => chooseFlag("EN", "en-US")}><a>EN</a><Flag type={"EN"}/></li>
            <li id="flagES" onClick={() => chooseFlag("ES", "es")}><a>ES</a><Flag type={"ES"}/></li>
            <li id="flagFR" onClick={() => chooseFlag("FR", "fr-FR")}><a>FR</a><Flag type={"FR"}/></li>
          </ul>
        </DropdownFlag>
    </ContainerNavbar>
  );
};

export default Navbar;
