import React from "react";

import { ContainerMenuRight, ContIcons, Icon, TextMenuRight} from './styles';
import { AiOutlineFolderView } from 'react-icons/ai';
import { CgInsertAfterR } from 'react-icons/cg';
import { RiFileEditFill } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { GiOrganigram } from 'react-icons/gi';
import { IoPersonAddSharp } from 'react-icons/io5';

const MenuRight: React.FC = () => {

    return (
        <ContainerMenuRight>
            <ContIcons>
                <Icon>
                    <AiOutlineFolderView id="icons" color="#fff" /> 
                </Icon> 
                <TextMenuRight>
                    <a href="../Projects/">VISUALIZAR</a>
                    <a href="../Projects/">PROJETOS</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <CgInsertAfterR id="icons" color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="../RegisterProjects">CADASTRAR</a>
                    <a href="../RegisterProjects">PROJETOS</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <RiFileEditFill id="icons" color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="../EditProjects">EDITAR</a>
                    <a href="../EditProjects">PROJETOS</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <IoPersonAddSharp id="icons" color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="../RegisterConsultants">CADASTRAR</a>
                    <a href="../RegisterConsultants">CONSULTORES</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon> 
                    <GiOrganigram id="icons" color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="../RegisterConsultants">ALOCAR</a>
                    <a href="../RegisterConsultants">CONSULTORES</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
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