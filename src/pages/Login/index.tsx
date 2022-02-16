import React, { useState, useRef, useCallback, useEffect} from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import intl from 'react-intl-universal';

import { useAuth }  from '../../hooks/AuthContext';
import { infoNotify }  from '../../hooks/SystemToasts';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/InputPrimary';

import { ContainerBtn, ContainerInput, Rectangle, Section, Image, SideContainer, LoginContainer } from './styles';

const locales = {
  'pt-BR': require('../../language/pt-BR.json'),
  'en-US': require('../../language/en-US.json'),
  'es': require('../../language/es.json'),
  'fr-FR': require('../../language/fr-FR.json'),
};

interface SingInFormData {
  email: string;
  senha: string;
}

const Login: React.FC = () => {  
  const [language] = useState(() => {
    let languageStorage = localStorage.getItem('Language');

    if (languageStorage) {
      let languageObject = JSON.parse(languageStorage);
      return languageObject;
    } else {
      let linguagemPadrao = {flag: "BR", code: "pt-BR"}
      localStorage.setItem('Language', JSON.stringify(linguagemPadrao));
      localStorage.setItem('Fonte', '2.8');
      localStorage.setItem('Animation', "true");
      localStorage.setItem('Notification', "false");
      return;
    }
  });

  intl.init({
    currentLocale: language ? language.code : 'pt-BR',
    locales
  });  

  const formRef = useRef<FormHandles>(null);
  const { signIn: singIn } = useAuth();

  const handleSubmit = useCallback(async (data: SingInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required(intl.get('textos_em_geral.email_obrigatorio')).email(intl.get('textos_em_geral.informar_email_valido')),    
        senha: Yup.string().required(intl.get('textos_em_geral.senha_obrigatoria')),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      singIn({
        email: data.email,
        senha: data.senha
      })
    } catch(err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, [singIn]);

  return (
    <>
    <Section>
      <Rectangle>
        <div className="textBox">
          <h1>GEW</h1>
          <h2>{intl.get('textos_em_geral.descricao_gew')}</h2>
        </div>
        <Image />
      </Rectangle>
      <SideContainer>
        <div className="logo"/>
        <LoginContainer id="containerLogin">
          <h1>{intl.get('textos_em_geral.login')}</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <ContainerInput>
              <Input type="text" name="email" placeholder="" text={intl.get('textos_em_geral.usuario')} />
            </ContainerInput>
            <ContainerInput>
              <Input type="password"  name="senha" placeholder="" text={intl.get('textos_em_geral.senha')} autoComplete="off"/>
            </ContainerInput>     
            <ContainerBtn>
              <button type="submit">{intl.get('textos_em_geral.entrar')}</button>
              <p onClick={() => infoNotify(intl.get('textos_em_geral.texto_esqueceu_senha'))}>{intl.get('textos_em_geral.esqueceu_senha')}</p>
            </ContainerBtn>
          </Form>
        </LoginContainer>
      </SideContainer>
    </Section>
    </>
  );
};

export default Login;