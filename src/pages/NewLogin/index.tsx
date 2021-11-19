import React, { useRef, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth }  from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../components/InputPrimary';

import { Container, Line, LoginCont, ContainerBottom, ContainerBtn, ContainerInput,
        Rectangle, Section, Image, SideContainer, LoginContainer } from './styles';

interface SingInFormData {
    email: string;
    senha: string;
}

const NewLogin: React.FC = () => {  

    /* Definição do idioma principal - Revisar */
    let linguagemPadrao = {flag: "BR", code: "pt-BR"}
    localStorage.setItem('Language', JSON.stringify(linguagemPadrao));

    /* Definição da animação dos gráficos - Revisar */
    localStorage.setItem('Animation', "false");

    const formRef = useRef<FormHandles>(null);
    const { signIn: singIn } = useAuth();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: SingInFormData) => {
      try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
              email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),    
              senha: Yup.string().required('Senha obrigatória'),
          })

          await schema.validate(data, {
              abortEarly: false,
          })

          singIn({
              email: data.email,
              senha: data.senha
          })

          history.push('/');

      } catch(err) {
          if(err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);

            return;
          }
      }
  }, [history, singIn]);

  const trocar = (x: String) => {
      if(x === "true") {
        document.getElementById("container-login")!.style.display = "none";
        document.getElementById("container-pwd")!.style.display = "block";
        x = "false";
      } else if(x === "false") {
        document.getElementById("container-login")!.style.display = "block";
        document.getElementById("container-login")!.style.display = "flex";
        document.getElementById("container-pwd")!.style.display = "none";
        x = "true";
    }
  } 

    return (
        <>
        <Section>
        <Rectangle>
          <div className="textBox">
            <h1>GEW</h1>
            <h2>Gestão de Projetos para Controle de Desenvolvimento de Software</h2>
          </div>
          <Image />
        </Rectangle>
        <SideContainer>
            <div className="logo" ></div>
            <LoginContainer>
                <h1>Login</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <ContainerInput>
                        <Input type="text" name="email" placeholder="" text="Usuário" />
                    </ContainerInput>
                    <ContainerInput>
                        <Input type="password" name="senha" placeholder="" text="Senha" autoComplete="off"/>
                    </ContainerInput>     
                    <ContainerBtn>
                        <button type="submit">entrar</button>
                        <p onClick={() => trocar("true")}>Esqueceu sua senha?</p>
                    </ContainerBtn>
                </Form>
            </LoginContainer>
        </SideContainer>
        </Section>
        </>
    );
};

export default NewLogin;