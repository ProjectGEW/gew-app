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

interface PageProps {
  numeroDoProjeto?: number;
}

const locales = {
  'pt-BR': require('../../../language/pt-BR.json'),
  'en-US': require('../../../language/en-US.json'),
  'es': require('../../../language/es.json'),
  'fr-FR': require('../../../language/fr-FR.json'),
};

const MenuRight: React.FC<PageProps>= ({ numeroDoProjeto }) => {
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
    <ContainerMenuRight numeroDoProjeto={numeroDoProjeto} localDaRota={page}>
      <a href="../projects">
        <ContIcons id="first"> 
          <Icon>
            <AiOutlineFolderView id="icons" color="#fff" />
          </Icon>
          <TextMenuRight>
            <p>{intl.get('menu_direito.primeiro_botao.primeiro')}</p>
            <p>{intl.get('menu_direito.primeiro_botao.segundo')}</p>
          </TextMenuRight>
        </ContIcons>
      </a>
      <a href="../register_projects">
        <ContIcons id="second">
          <Icon>
            <CgInsertAfterR id="icons" color="#fff" />
          </Icon>
          <TextMenuRight>
            <p>{intl.get('menu_direito.segundo_botao.primeiro')}</p>
            <p>{intl.get('menu_direito.segundo_botao.segundo')}</p>
          </TextMenuRight>
        </ContIcons>
      </a>
      <a href="../edit_projects">
        <ContIcons id="three">
          <Icon>
            <RiFileEditFill id="icons" color="#fff" />
          </Icon>
          <TextMenuRight>
            <p>{intl.get('menu_direito.terceiro_botao.primeiro')}</p>
            <p>{intl.get('menu_direito.terceiro_botao.segundo')}</p>
          </TextMenuRight>
        </ContIcons>
      </a>
      <a href="../register_consultants">
        <ContIcons id="four">
          <Icon>
            <IoPersonAddSharp id="icons" color="#fff" />
          </Icon>
          <TextMenuRight>
            <p>{intl.get('menu_direito.quarto_botao.primeiro')}</p>
            <p>{intl.get('menu_direito.quarto_botao.segundo')}</p>
          </TextMenuRight>
        </ContIcons>
      </a>
      <a href="/consultants/view_projects">
        <ContIcons id="five">
          <Icon>
            <GiOrganigram id="icons" color="#fff" />
          </Icon>
          <TextMenuRight>
            <p>{intl.get('menu_direito.quinto_botao.primeiro')}</p>
            <p>{intl.get('menu_direito.quinto_botao.segundo')}</p>
          </TextMenuRight>
        </ContIcons>
      </a>
      <a href="../dashboard/0">
        <ContIcons id="six">
          <Icon>
            <GoGraph id="icons" color="#fff" />
          </Icon>
          <TextMenuRight>
            <p>{intl.get('menu_direito.sexto_botao.primeiro')}</p>
            <p>{intl.get('menu_direito.sexto_botao.segundo')}</p>
          </TextMenuRight>
        </ContIcons>
      </a>
    </ContainerMenuRight>
  );
};

export default MenuRight;
