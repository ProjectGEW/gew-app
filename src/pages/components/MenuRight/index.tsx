import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { ContainerMenuRight, ContIcons, Icon, TextMenuRight } from "./styles";

import intl from "react-intl-universal";

import { AiOutlineFolderView } from "react-icons/ai";
import { CgInsertAfterR } from "react-icons/cg";
import { RiFileEditFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";

const locales = {
  'pt-BR': require('../../../language/pt-BR.json'),
  'en-US': require('../../../language/en-US.json'),
  'es': require('../../../language/es.json'),
  'fr-FR': require('../../../language/fr-FR.json'),
};

const MenuRight: React.FC = () => {
  const [language] = useState(() => {
    let languageStorage = localStorage.getItem('Language');

    if(languageStorage) {
        let languageObject = JSON.parse(languageStorage);
        return languageObject;
    } 
  });

  intl.init({
      currentLocale: language.code,
      locales
  });

  const location = useLocation();
  const [page, setPage] = useState("");

  const historicPage = useCallback(() => {
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
          <a href="../projects">{intl.get('menu_direito.primeiro_botao.primeiro')}</a>
          <a href="../projects">{intl.get('menu_direito.primeiro_botao.segundo')}</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <CgInsertAfterR id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../register_projects">{intl.get('menu_direito.segundo_botao.primeiro')}</a>
          <a href="../register_projects">{intl.get('menu_direito.segundo_botao.segundo')}</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <RiFileEditFill id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../edit_projects">{intl.get('menu_direito.terceiro_botao.primeiro')}</a>
          <a href="../edit_projects">{intl.get('menu_direito.terceiro_botao.segundo')}</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <IoPersonAddSharp id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../register_consultants">{intl.get('menu_direito.quarto_botao.primeiro')}</a>
          <a href="../register_consultants">{intl.get('menu_direito.quarto_botao.segundo')}</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <GiOrganigram id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../register_consultants">{intl.get('menu_direito.quinto_botao.primeiro')}</a>
          <a href="../register_consultants">{intl.get('menu_direito.quinto_botao.segundo')}</a>
        </TextMenuRight>
      </ContIcons>
      <ContIcons localDaRota={page}>
        <Icon>
          <GoGraph id="icons" color="#fff" />
        </Icon>
        <TextMenuRight>
          <a href="../dashboard">{intl.get('menu_direito.sexto_botao.primeiro')}</a>
          <a href="../dashboard">{intl.get('menu_direito.sexto_botao.segundo')}</a>
        </TextMenuRight>
      </ContIcons>
    </ContainerMenuRight>
  );
};

export default MenuRight;
