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
    /*if (location.pathname === "/home") {
      setPage("home"); 
    } else if (location.pathname === "/projects") {
      setPage("projects");
    } else if (location.pathname === "/register_projects") {
      setPage("register_projects");
    } else if (location.pathname === "/edit_projects") {
      setPage("edit_projects");
    } else if (location.pathname === "/register_consultants") {
      setPage("register_consultants");
    }*/

    setPage(location.pathname);
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
          <a href="../register_consultants">CADASTRAR</a>
          <a href="../register_consultants">CONSULTORES</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <GiOrganigram id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../register_consultants">ALOCAR</a>
          <a href="../register_consultants">CONSULTORES</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <GoGraph id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../dashboard">IR PARA</a>
          <a href="../dashboard">DASHBOARDS</a>
        </TextMenuRight>
      </ContIcons>
    </ContainerMenuRight>
  );
};

export default MenuRight;
