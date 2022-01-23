import React, { useState } from 'react';

import intl from 'react-intl-universal';

import Navbar from '../../components/Navbar';

import { Container } from './styles';

const locales = {
  'pt-BR': require('../../language/pt-BR.json'),
  'en-US': require('../../language/en-US.json'),
  'es': require('../../language/es.json'),
  'fr-FR': require('../../language/fr-FR.json'),
};

const Projects: React.FC = () => {  
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

  return (
    <>
    <Navbar/>
    <Container>
      <div>
        <h1>{intl.get('textos_em_geral.notfound')}</h1>
      </div>
    </Container>
    </>
  );
};

export default Projects;