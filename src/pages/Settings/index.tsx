import React, { useState, useEffect } from 'react';

import MenuLeft from '../../components/MenuLeft';
import MenuRight from '../../components/MenuRight';
import Navbar from '../../components/Navbar';

import { FaEdit } from "react-icons/fa";

import { ContainerHome, Container, Left, Right } from './styles';


const Settings: React.FC = () => {
    const [recebeAnimacao] = useState(() => {
        let animacaoStorage = localStorage.getItem('Animation');

        if(animacaoStorage) {
            let animacaoObject = JSON.parse(animacaoStorage);
            return animacaoObject;
        } 
    });

    const [animacao, setAnimacao] = useState(recebeAnimacao);

    useEffect(() => {
      if(animacao === true) {
          document.getElementById("animation")!.style.backgroundColor = "#adffb0";
          document.getElementById("animation")!.innerHTML = "Ativado";

          localStorage.setItem('Animation', "true");
      } else {
          document.getElementById("animation")!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";            
          document.getElementById("animation")!.innerHTML = "Desativado";

          localStorage.setItem('Animation', "false");
      }
  },[animacao]);

  const userName = localStorage.getItem('User:nome');

  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState<string>('');

  // const onDrop = useCallback((acceptedFiles) => {
  //   setFile(acceptedFiles[0]);
  //   setFileName(acceptedFiles[0].name);
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   multiple: false,
  //   onDropAccepted: onDrop,
  // });

  // const { ref, ...rootProps } = getRootProps();

  // console.log(file);

  return (
    <>
    <Navbar />
      <MenuLeft />
      <ContainerHome>                
        <Container>
          <h1><strong>Configurações</strong> Gerais</h1>
          <span />
        </Container>
          <Container>
            <Left>
              <strong>Configurações de texto</strong>
              <p>Tamanho da fonte</p>
            </Left>
            <Right>
              <div>
                <select name="font">
                  <option value="size1" selected>Padrão</option>
                  <option value="size2">Pequena</option>
                  <option value="size3">Média</option>
                  <option value="size4">Grande</option>
                </select>
              </div>
            </Right>
        </Container>
        <Container>
          <Left>
            <strong>Configurações do dashboard</strong>
            <p>Animações</p>
          </Left>
          <Right>
            <div>
              <button id="animation" onClick={() => setAnimacao(!animacao)}>Ativar</button>
            </div>
          </Right>
        </Container>
        <Container>
          <Left>
            <strong>Configurações da conta</strong>
            <p>Trocar nome de usuário</p>
            <p>Alterar sua senha</p>
            <p>Alterar foto de perfil</p>
            <p>Desativar notificações</p>
          </Left>
          <Right>
            <div>
              <p>
                <input type="text" value={userName ? userName : "Renato Silva"} disabled/>
                <FaEdit size={20}/>
              </p>
              <p>
                <input type="password" value="**************" disabled/>
                <FaEdit size={20}/>
              </p>
              <p>
                  <input id="fotoPerfil" type="file"/>
                  <input type="text" placeholder={'foto_perfil.png'} disabled/>
                  <label htmlFor="fotoPerfil"><FaEdit size={20}/></label>
              </p>
              <button id="notification">Desativado</button>
            </div>
          </Right>
        </Container>
      </ContainerHome>
    <MenuRight />
    </>
  );
};

export default Settings;