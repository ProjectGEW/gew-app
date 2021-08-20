import React, { FormEvent, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

import {
  ContainerNavbar,
  Logo,
  PageIndicator,
  SandwichMenu,
  DropdownMenu,
  LanguageIndicator,
  Flag,
  DropdownFlag,
  HistoricPage,
} from "./styles";

const Navbar: React.FC = () => {
  const [flag, setFlag] = useState("");
  const location = useLocation();
  const pathname = window.location.pathname;
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

  async function chooseFlag(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    alert(flag);
    setFlag("en-US");
    alert(flag);
  }

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
        <Flag></Flag>
        <IoIosArrowDown id="arrow" size={20} onClick={openMenuFlag} />
      </LanguageIndicator>
      <DropdownFlag id="dropdownFlag">
        <ul>
          <li>
            <a>ES</a>
          </li>
          <li>
            <a>EN</a>
          </li>
          <li>
            <a>UK</a>
          </li>
          <li>
            <a>FR</a>
          </li>
        </ul>
      </DropdownFlag>
    </ContainerNavbar>
  );
};

export default Navbar;
