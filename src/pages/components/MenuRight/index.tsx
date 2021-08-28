import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { ContainerMenuRight, ContIcons, Icon, TextMenuRight } from "./styles";

import { AiOutlineFolderView } from "react-icons/ai";
import { CgInsertAfterR } from "react-icons/cg";
import { RiFileEditFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";

const MenuRight: React.FC = () => {
  const location = useLocation();
  const [page, setPage] = useState("");

  const historicPage = useCallback(() => {
    if (location.pathname === "/home") {
      setPage("home"); 
    } else if (location.pathname === "/projects") {
      setPage("projects");
    } else if (location.pathname === "/Dashboard") {
      setPage("dashboard");
    } else if (location.pathname === "/register_projects") {
      setPage("register_projects");
    } else if (location.pathname === "/edit_projects") {
      setPage("edit_projects");
    }
  }, [location])

  useEffect(() => {
    historicPage();
  }, [historicPage]);

  return (
    <ContainerMenuRight>
      <ContIcons localDaRota={page}> 
        <Icon>
          <AiOutlineFolderView id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../projects">VISUALIZAR</a>
          <a href="../projects">PROJETOS</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <CgInsertAfterR id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../register_projects">CADASTRAR</a>
          <a href="../register_projects">PROJETOS</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <RiFileEditFill id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../edit_projects">EDITAR</a>
          <a href="../edit_projects">PROJETOS</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <IoPersonAddSharp id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../RegisterConsultants">CADASTRAR</a>
          <a href="../RegisterConsultants">CONSULTORES</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <GiOrganigram id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../RegisterConsultants">ALOCAR</a>
          <a href="../RegisterConsultants">CONSULTORES</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <GoGraph id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../Dashboard">IR PARA</a>
          <a href="../Dashboard">DASHBOARDS</a>
        </TextMenuRight>
      </ContIcons>
    </ContainerMenuRight>
  );
};

export default MenuRight;
