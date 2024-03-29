import React , { MouseEvent, useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';

import { ContainerMenu, ContainerInfo, UserImg, NewsImg, LineBlue, DeleteImg, RefreshImg,
  ContainerMsg, Msg, Aba, LineMsg, TextMsg, TitleMsg, BtnOpen, ExitImg } from './styles';
    
import { IoNewspaperOutline, IoExitOutline } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import { RiDeleteBinLine} from 'react-icons/ri';

const locales = {
  'pt-BR': require('../../language/pt-BR.json'),
  'en-US': require('../../language/en-US.json'),
  'es': require('../../language/es.json'),
  'fr-FR': require('../../language/fr-FR.json'),
};

interface IDados {
  user: number,
  horas: number,
  projeto: number
}

interface IFoto {
  fotoPerfil?: string;
}

const MenuLeft: React.FC<IFoto> = ({ fotoPerfil }) => {
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

  const userName = localStorage.getItem('User:nome');

  var status = 0;

  function handdleClick(event: MouseEvent) {
    event.preventDefault();

    if(status !== 1) {
      document.getElementById("btn-open")!.style.transform = "rotate(225deg)";
      document.getElementById("btn-open")!.style.marginLeft = "97%";

      document.getElementById("container-menu")!.style.overflow = 'hidden';
      document.getElementById("container-menu")!.style.transform = 'translateX(11vw)';
      document.getElementById("user-img")!.style.transform = 'translateX(-11.25vw)';
      document.getElementById("user-img")!.style.width = '8vh';
      document.getElementById("user-img")!.style.height = '9.25vh';

      document.getElementById("news-img")!.style.transform = 'translate(-12vw, -0.5vh)';
      document.getElementById("news-img")!.style.width = '2.77vh';
      document.getElementById("news-img")!.style.height = '2.73vh';
      document.getElementById("news-img")!.style.marginLeft = '12.5vw';
      document.getElementById("news-img")!.style.justifyContent = 'start';

      document.getElementById("title-not")!.style.marginTop = '3.8vh';
      document.getElementById("user-name")!.style.margin = '1vh 0 0 16vw';

      document.getElementById("user-name")!.style.display = "block";
      document.getElementById("title-not")!.style.display = "block";    
      document.getElementById("line-blue")!.style.display = "block";
      document.getElementById("refresh-img")!.style.display = "block";
      document.getElementById("delete-img")!.style.display = "block";
      document.getElementById("container-msg")!.style.display = "block";

      status = status + 1;
    } else {
      document.getElementById("container-menu")!.style.overflow = 'visible';
      document.getElementById("container-menu")!.style.transform = 'translateX(0vw)';
      document.getElementById("user-img")!.style.transform = 'translateX(0vw)';
      document.getElementById("user-img")!.style.width = '8vh';
      document.getElementById("user-img")!.style.height = '8vh';

      document.getElementById("news-img")!.style.transform = 'translate(0vw, 0vh)';
      document.getElementById("news-img")!.style.width = '10vh';
      document.getElementById("news-img")!.style.height = '6vh';
      document.getElementById("news-img")!.style.marginLeft = '14vw';

      document.getElementById("user-name")!.style.display = "none";
      document.getElementById("title-not")!.style.display = "none";
      document.getElementById("line-blue")!.style.display = "none";
      document.getElementById("refresh-img")!.style.display = "none";
      document.getElementById("delete-img")!.style.display = "none";
      document.getElementById("container-msg")!.style.display = "none";

      document.getElementById("btn-open")!.style.transform = "rotate(45deg)";
      document.getElementById("btn-open")!.style.marginLeft = "97%";
      document.getElementById("btn-open")!.style.backgroundColor = "#fff";

      status = status - 1;
    }
  }

  function singOut() {
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    localStorage.removeItem("User:nome");
    localStorage.removeItem("Level");
  }    

    // Foto
    // const [foto] = useState(() => {
    //     let languageStorage = localStorage.getItem('Foto');

    //     if(languageStorage) {
    //         return languageStorage;
    //     } 
    // });

    // Notificações
  const [guardaDadosLocalStorege, setGuardaDadosLocalStorega] = useState<IDados[]>([]);
  let busca = localStorage.getItem('Notification');

  useEffect(() => {
    let buscaDadosLocalStorage = localStorage.getItem('Notification');

    if(buscaDadosLocalStorage) {
      let transforma = JSON.parse(buscaDadosLocalStorage);
      setGuardaDadosLocalStorega(transforma);
    }
  },[busca]);

  function atualizaNotificacao() {
    let buscaDadosLocalStorage = localStorage.getItem('Notification');

    if(buscaDadosLocalStorage) {
      let transforma = JSON.parse(buscaDadosLocalStorage);
      setGuardaDadosLocalStorega(transforma);
    } else {
      setGuardaDadosLocalStorega([]);
    }
  }

  return (
    <>
      <ContainerMenu id="container-menu">
        <ContainerInfo>
          <UserImg id="user-img">
            {
              fotoPerfil ?
                <img src={fotoPerfil ? fotoPerfil : ''} alt="Foto de perfil" width={85} height={85} />
              : <FaUserAlt id="iconUser" color="#00579D" />

            }  
            <p id="user-name">{intl.get('menu_esquerdo.mensagem')}<br/><a href="./">{userName ? userName : "Renato Silva"}</a></p> 
          </UserImg>
          <NewsImg id="news-img">
            <IoNewspaperOutline id="iconNews" onClick={handdleClick} />
            <p id="title-not">{intl.get('menu_esquerdo.notificacao')}</p> 
          </NewsImg>
          <LineBlue id="line-blue" />
          <RefreshImg id="refresh-img">
            <FiRefreshCcw id="iconRef" onClick={() => atualizaNotificacao()}/>
          </RefreshImg>
          <DeleteImg id="delete-img">
            <RiDeleteBinLine id="iconDel" onClick={() => {localStorage.removeItem('Notification'); atualizaNotificacao();}}/>
          </DeleteImg>
          <ContainerMsg id="container-msg">
            {!guardaDadosLocalStorege ? '' :
              guardaDadosLocalStorege.map((res, index) => (
                <Msg key={index}>
                  <LineMsg>
                    <Aba>
                      <TitleMsg>
                        <p>{intl.get('menu_esquerdo.card.titulo')}</p>
                      </TitleMsg>
                      <TextMsg>
                        <p>O funcionário {res.user} apontou {res.horas} horas no projeto {res.projeto}.</p>
                      </TextMsg>
                    </Aba> 
                  </LineMsg>
                </Msg>
              ))
            }
          </ContainerMsg>
          <ExitImg id="exit-img">
            <Link to="/">
              <IoExitOutline id="iconExit" onClick={singOut}>{intl.get('navbar.dropdown.sair')}</IoExitOutline>
            </Link>
          </ExitImg>
        </ContainerInfo>
        <BtnOpen id="btn-open" onClick={handdleClick} />
      </ContainerMenu>
    </>
  );
}

export default MenuLeft;