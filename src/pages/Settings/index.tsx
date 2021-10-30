import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Paper from "@material-ui/core/Paper";

import MenuLeft from '../components/MenuLeft';
import MenuRight from '../components/MenuRight';
import Navbar from '../components/Navbar';

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

    // Revisão*****
  const activeButton = (x: String) => {
    if(x === "animation") {
      document.getElementById("animation")!.style.backgroundColor = "#00579D";
      document.getElementById("animation")!.style.transform = "rotate(180deg)";

      let animation = {animation: "true"}
      localStorage.setItem('Animation', JSON.stringify(animation));
        
    } else {
      document.getElementById("animation")!.style.backgroundColor = "#6B6B6B";
      document.getElementById("animation")!.style.transform = "rotate(0deg)";
    } 
  }

  const userName = localStorage.getItem('User:nome');

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState<string>('');

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setFileName(acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDropAccepted: onDrop,
  });

  const { ref, ...rootProps } = getRootProps();

  function uploadFotoPerfil() {
    
  }

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
              <span id="animation" onClick={() => activeButton("animation")} />
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
                  <input id="fotoPerfil" type="file" {...getInputProps()}/>
                  <input type="text" placeholder={fileName ? fileName : 'foto_perfil.png'} disabled/>
                  <label htmlFor="fotoPerfil"><FaEdit size={20}/></label>
              </p>
              <span id="notification" onClick={() => activeButton("not")} />
            </div>
          </Right>
        </Container>
      </ContainerHome>
    <MenuRight />
    </>
  );
};

export default Settings;