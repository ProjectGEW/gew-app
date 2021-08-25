import React , { MouseEvent, useState } from "react";

import intl from 'react-intl-universal';

import { ContainerMenu, ContainerInfo, UserImg, NewsImg, LineBlue, DeleteImg, RefreshImg,
    ContainerMsg, Msg, Aba, LineMsg, TextMsg, TitleMsg, BtnOpen, ExitImg } from './styles';
    import { IoNewspaperOutline, IoExitOutline } from 'react-icons/io5';
    import { FaUserAlt } from 'react-icons/fa';
    import { FiRefreshCcw } from 'react-icons/fi';
    import { RiDeleteBinLine} from 'react-icons/ri';

const locales = {
    'pt-BR': require('../../../language/pt-BR.json'),
    'en-US': require('../../../language/en-US.json'),
    'es': require('../../../language/es.json'),
    'fr-FR': require('../../../language/fr-FR.json'),
};

const MenuLeft: React.FC = () => {
    const [code] = useState(() => {
        const storageCode = localStorage.getItem('Language:code');
          if(storageCode) {
            return JSON.parse(storageCode);
          } else {
              return 'pt-BR';
          }
      });

    intl.init({
        currentLocale: code,
        locales
    });

    var status = 0;

    function handdleClick(event: MouseEvent) {
        event.preventDefault();

        if(status !== 1) {
            document.getElementById("btn-open")!.style.transform = "rotate(225deg)";
            document.getElementById("btn-open")!.style.marginLeft = "97%";

            document.getElementById("container-menu")!.style.overflow = 'hidden';
            document.getElementById("container-menu")!.style.transform = 'translateX(11vw)';
            document.getElementById("user-img")!.style.transform = 'translateX(-11vw)';
            document.getElementById("user-img")!.style.width = '8vh';
            document.getElementById("user-img")!.style.height = '9.25vh';

            document.getElementById("news-img")!.style.transform = 'translate(-12vw, 1.6vh)';
            document.getElementById("news-img")!.style.width = '2.77vh';
            document.getElementById("news-img")!.style.height = '2.73vh';
            document.getElementById("news-img")!.style.marginLeft = '12.5vw';
            document.getElementById("news-img")!.style.justifyContent = 'start';

            document.getElementById("title-not")!.style.marginTop = '1.6vh';
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
            document.getElementById("news-img")!.style.marginLeft = '12.5vw';

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

    return (
        <>
            <ContainerMenu id="container-menu">
                    <ContainerInfo>
                        <UserImg id="user-img">
                            <FaUserAlt id="iconUser" color="#00579D" />
                            <p id="user-name">{intl.get('menu_esquerdo.mensagem')}<br/><a href="./">Renato Silva</a></p> 
                        </UserImg>
                        <NewsImg id="news-img">
                            <IoNewspaperOutline id="iconNews" />
                            <p id="title-not">{intl.get('menu_esquerdo.notificacao')}</p> 
                        </NewsImg>
                        <LineBlue id="line-blue" />
                        <RefreshImg id="refresh-img">
                            <FiRefreshCcw id="iconRef"/>
                        </RefreshImg>
                        <DeleteImg id="delete-img">
                            <RiDeleteBinLine id="iconDel"/>
                        </DeleteImg>
                        <ContainerMsg id="container-msg">
                            <Msg>
                                <LineMsg>
                                    <Aba>
                                        <TitleMsg>
                                            <p>{intl.get('menu_esquerdo.card.titulo')}</p>
                                        </TitleMsg>
                                        <TextMsg>
                                            <p>O funcionário José concluiu suas tarefas!</p>
                                        </TextMsg>
                                    </Aba>
                                </LineMsg>
                            </Msg>
                        </ContainerMsg>
                        <ExitImg id="exit-img">
                            <IoExitOutline id="iconExit"/>
                        </ExitImg>
                    </ContainerInfo>
                    <BtnOpen id="btn-open" onClick={handdleClick} />
                </ContainerMenu>
            </>
    );
}

export default MenuLeft;