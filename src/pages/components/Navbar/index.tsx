import React, { useState, useEffect, useCallback } from "react";

import { useLocation } from "react-router-dom";

import intl from "react-intl-universal";

import { IoIosArrowDown } from "react-icons/io";

import BR from "../../../assets/br.svg";
import EN from "../../../assets/en.svg";
import ES from "../../../assets/es.svg";
import FR from "../../../assets/fr.svg";

import { ContainerNavbar, Logo, PageIndicator, SandwichMenu, DropdownMenu,
    LanguageIndicator, Flag, DropdownFlag, HistoricPage } from './styles';

const locales = {
  'pt-BR': require('../../../language/pt-BR.json'),
  'en-US': require('../../../language/en-US.json'),
  'es': require('../../../language/es.json'),
  'fr-FR': require('../../../language/fr-FR.json'),
};

const Navbar: React.FC = () => {
  const [language] = useState(() => {
    const storageFlag = localStorage.getItem('Language');

    if(storageFlag) {
      return JSON.parse(storageFlag);
    } 
    return 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('Language', JSON.stringify(language))
  }, [language]);

  const location = useLocation();
  const [page, setPage] = useState("");
  const pathname = window.location.pathname;

  const historicPage = useCallback(() => {
    if (location.pathname === "/home") {
      document.getElementById("home")!.style.display = "none";
      setPage("Home"); 
    } else if (location.pathname === "/projects") {
      setPage("Projetos");
    } else if (location.pathname === "/dashboard/0") {
      setPage("Dashboards");
    } else if (location.pathname === "/register_projects") {
      setPage("Cad. Projetos");
    } else if (location.pathname === "/edit_projects") {
      setPage("Edit. Projetos");
    } else if (location.pathname === "/register_consultants") {
      setPage("Cad. Consultores");
    } else if (location.pathname === "/settings") {
      setPage("Configurações");
    } else if (location.pathname === "/test") {
      setPage("Área de Teste");
    } else {
      var path = "";
      for(var x = 0; x < pathname.length; x++) {
        if(
          pathname[x] !== "/" && pathname[x] !== "0" && pathname[x] !== "1" &&
          pathname[x] !== "2" && pathname[x] !== "3" && pathname[x] !== "4" &&
          pathname[x] !== "5" && pathname[x] !== "6" && pathname[x] !== "7" &&
          pathname[x] !== "8" && pathname[x] !== "8" && pathname[x] !== "9") {
          if(x === 1) {
            path += pathname[x].toUpperCase();
          } else {
            path += pathname[x];
          }
        }
      }
      setPage(path);
    }
  }, [location, pathname])

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

  const chooseFlag = (flag: String, codeFlag: String) => {       
    if(flag === "BR") {
      document.getElementById("flagSelected")!.style.backgroundImage = "url(" + BR + ")";
    } else if(flag === "EN") {
      document.getElementById("flagSelected")!.style.backgroundImage = "url(" + EN + ")";
    } else if(flag === "ES") {
      document.getElementById("flagSelected")!.style.backgroundImage = "url(" + ES + ")";
    } else if(flag === "FR") {
      document.getElementById("flagSelected")!.style.backgroundImage = "url(" + FR + ")";
    }

    let selected = {flag: flag, code: codeFlag}
    localStorage.setItem('Language', JSON.stringify(selected));

    window.location.reload();
    openMenuFlag()
  }

  intl.init({
    currentLocale: language.code,
    locales
  });

  return (
    <ContainerNavbar onLoad={historicPage}>
      <Logo/>
      <PageIndicator id="pageIndicator">
        <div id="home">
          <a href="/home">{intl.get('navbar.rota')}</a>
        </div>
        <div id="page">
          <HistoricPage localDaRota={!!location.pathname}>{page}</HistoricPage>
        </div>
      </PageIndicator>
      <SandwichMenu onClick={openDropDown}>
        <DropdownMenu id="dropdownMenu">
          <ul>
            <li><a href="/home">{intl.get('navbar.dropdown.perfil')}</a></li>
            <li><a href="./settings">{intl.get('navbar.dropdown.configuracoes')}</a></li>
            <li><a href="/">{intl.get('navbar.dropdown.sair')}</a></li>
          </ul>
        </DropdownMenu>
      </SandwichMenu>
      <LanguageIndicator>
        <Flag type={language.flag} id="flagSelected" />
        <IoIosArrowDown id="arrow" size={20} onClick={openMenuFlag}/>
      </LanguageIndicator>
        <DropdownFlag id="dropdownFlag">
          <ul>
            <li id="flagBR" onClick={() => chooseFlag("BR", "pt-BR")}><p>BR</p><Flag type={"BR"}/></li>
            <li id="flagEN" onClick={() => chooseFlag("EN", "en-US")}><p>EN</p><Flag type={"EN"}/></li>
            <li id="flagES" onClick={() => chooseFlag("ES", "es")}><p>ES</p><Flag type={"ES"}/></li>
            <li id="flagFR" onClick={() => chooseFlag("FR", "fr-FR")}><p>FR</p><Flag type={"FR"}/></li>
          </ul>
        </DropdownFlag>
    </ContainerNavbar>
  );
};

export default Navbar;