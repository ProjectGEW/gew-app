import React, { useState, useCallback, useEffect } from 'react';

import { useDropzone } from "react-dropzone";

import MenuLeft from '../../components/MenuLeft';
import MenuRight from '../../components/MenuRight';
import Navbar from '../../components/Navbar';

import intl from 'react-intl-universal';

import { ContainerSettings, Container, ContainerInfo, ContainerTitle, Box, Example } from './styles';

const locales = {
  'pt-BR': require('../../language/pt-BR.json'),
  'en-US': require('../../language/en-US.json'),
  'es': require('../../language/es.json'),
  'fr-FR': require('../../language/fr-FR.json'),
};

const Settings: React.FC = () => {
  const [language] = useState(() => {
    let languageStorage = localStorage.getItem('Language');

    if (languageStorage) {
      let languageObject = JSON.parse(languageStorage);
      return languageObject;
    }
  });

  intl.init({
    currentLocale: language.code,
    locales
  });

  const [nome] = useState(() => {
    let nomeStorage = localStorage.getItem('User:nome');

    if(nomeStorage) {
      return nomeStorage;
    } 
  });
  
  const [recebeAnimacao] = useState(() => {
    let animacaoStorage = localStorage.getItem('Animation');

    if(animacaoStorage) {
      let animacaoObject = JSON.parse(animacaoStorage);
      return animacaoObject;
    } 
  });

  const [recebeNotificacao] = useState(() => {
    let notificacaoStorage = localStorage.getItem('Notification');

    if(notificacaoStorage) {
      let notificacaoObject = JSON.parse(notificacaoStorage);
      return notificacaoObject;
    } 
  });
  
  const [animacao, setAnimacao] = useState(recebeAnimacao);
  const [notificacao, setNotificacao] = useState(recebeNotificacao);


  useEffect(() => {
    if(animacao === true) {
      document.getElementById("animation")!.style.backgroundColor = "#009d56";
      document.getElementById("animation")!.innerHTML = "Ativado";

      localStorage.setItem('Animation', "true");
    } else {
      document.getElementById("animation")!.style.backgroundColor = "#b31414";            
      document.getElementById("animation")!.innerHTML = "Desativado";

      localStorage.setItem('Animation', "false");
    }
  },[animacao]);

  const [tamanhoFonte, setTamanhoFonte] = useState('');

  const escolheTamanhoFonte = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('Fonte', event.target.value);
    setTamanhoFonte(event.target.value);
  }

  const [file, setFile] = useState<Blob>();
  const [url, setUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setUrl(URL.createObjectURL(acceptedFiles[0]));
    localStorage.setItem('Foto', URL.createObjectURL(acceptedFiles[0]));
  },[]);

  const {getRootProps, getInputProps} = useDropzone({
    multiple: false, 
    onDropAccepted: onDrop,
  });

  const {ref, ...rootProps} = getRootProps();

  return (
    <>
      <Navbar />
      <MenuLeft fotoPerfil={url} />
      <Container>
        <ContainerSettings>
          <ContainerInfo>
            <ContainerTitle>
              <h1>{intl.get("configura????es.titulo")}</h1>
              <span />
            </ContainerTitle>
          </ContainerInfo>
          <Box>
            <div className="row">
              <div>
                <h1>{intl.get("configura????es.config_texto")}</h1>
                <p>{intl.get("configura????es.tam_fonte")}</p>
              </div>
              <Example tamanhoFonte={tamanhoFonte}>
                <h2>{intl.get("configura????es.preview")}</h2>
              </Example>
              <div>
                <select name="font" onChange={escolheTamanhoFonte}>
                  <option value="2.8">{intl.get("configura????es.padrao")}</option>
                  <option value="2">{intl.get("configura????es.pequena")}</option>
                  <option value="3.2">{intl.get("configura????es.media")}</option>
                  <option value="4">{intl.get("configura????es.grande")}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div>
                <h1>{intl.get("configura????es.config_dash")}</h1>
                <p>{intl.get("configura????es.animacoes")}</p>
              </div>
              <div>
                <span id="animation" onClick={() => setAnimacao(!animacao)}>{intl.get("configura????es.ativado")}</span>
              </div>
            </div>
            <div className="row">
              <div>
                <h1>{intl.get("configura????es.config_conta")}</h1>
                <p>{intl.get("configura????es.trocar_user")}</p>
                <p>{intl.get("configura????es.trocar_senha")}</p>
                <p>{intl.get("configura????es.trocar_foto")}</p>
                <p>{intl.get("configura????es.desativar_notif")}</p>
              </div>
              <div id="inputs">
                <input type="text" defaultValue={nome ? nome : 'N??o foi poss??veo localizar o nome'} />
                <input type="password" />
                <label htmlFor="foto">{file ? file.type : intl.get("configura????es.escolher_img")}</label>
                <input id="foto" {...getInputProps()}/>
                <span id="notification" onClick={() => setNotificacao(!notificacao)}>{intl.get("configura????es.ativado")}</span>
              </div>
            </div>
            <div className="row">
              <div>
                <h1>{intl.get("configura????es.salvar_alt")}</h1>
              </div>
              <div>
                <button onClick={() => window.location.reload()}>{intl.get("configura????es.salvar")}</button>
              </div>
            </div>
          </Box>
        </ContainerSettings>
      </Container>
      <MenuRight />
    </>
  );
};

export default Settings;