import React, { useRef, useCallback, useContext} from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {AuthContext}  from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import WEG from "../../assets/weg.svg";

import Input from '../components/InputPrimary';

import { Container, Line, LoginCont, ContainerBottom, ContainerBtn, ContainerInput } from './styles';

interface SingInFormData {
    email: string;
    senha: string;
}

const Login: React.FC = () => {  
    let defaultLanguage = {flag: "BR", code: "pt-BR"}
    localStorage.setItem('Language', JSON.stringify(defaultLanguage));

    const formRef = useRef<FormHandles>(null);
    const { singIn } = useContext(AuthContext);

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
      } catch(err) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
      }
  }, [singIn]);

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
        <Container>
            <LoginCont>
                <Line />
                <img src={WEG} alt="logo"/>
                <ContainerBottom id="container-login">
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <ContainerInput>
                        <Input type="text" name="email" />
                        <label>Usuário</label>
                    </ContainerInput>
                    <ContainerInput>
                        <Input type="password" name="senha" autoComplete="off"/>
                        <label>Senha</label>
                    </ContainerInput>     
                    <ContainerBtn>
                        <button type="submit">entrar</button>
                        <p onClick={() => trocar("true")}>Esqueceu sua senha?</p>
                    </ContainerBtn>
                </Form>
                </ContainerBottom>
                <ContainerBottom id="container-pwd">
                    <div>
                        <h1>Alterar senha da conta</h1>
                        <p>Entre em contato com algum administrador do sistema.</p>
                        <button onClick={() => trocar("false")}>Voltar</button>
                    </div>
                </ContainerBottom>
            </LoginCont>
        </Container>
        </>
    );
};

export default Login;