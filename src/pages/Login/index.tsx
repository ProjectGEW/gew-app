import React, { useRef, useCallback, useContext} from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {AuthContext}  from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../components/InputPrimary';

import { Container, Line, LoginCont, ContainerBottom, ContainerBtn, ContainerInput } from './styles';

interface SingInFormData {
    email: string;
    senha: string;
}

const Login: React.FC = () => {  
    const formRef = useRef<FormHandles>(null);

    const { singIn } = useContext(AuthContext);

    const handleSubmit = useCallback(async (data: SingInFormData) => {
      try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
              email: Yup.string().required('E-mail').email('Informe um e-mail válido'),
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

  const esq = true;

  function trocar() {
    const esq = false;
    alert(esq);
  } 

    return (
        <>
        <Container>
            <LoginCont>
                <Line />
                <img src="https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand.svg" alt="logo"/>
                <ContainerBottom>
                  <Form ref={formRef} onSubmit={handleSubmit}>
                      { esq ?
                      <>
                        <ContainerInput>
                            <Input type="text" name="email" />
                            <label>Usuário</label>
                        </ContainerInput>
                        <ContainerInput>
                            <Input type="password" name="senha" />
                            <label>Senha</label>
                        </ContainerInput>     
                        <ContainerBtn>
                            <button type="submit">entrar</button>
                            <a onClick={trocar}>Esqueceu sua senha?</a>
                        </ContainerBtn>
                        </>
                        :
                        <a>a</a>
                      }
                  </Form>
                </ContainerBottom>
            </LoginCont>
        </Container>
        </>
    );
};

export default Login;