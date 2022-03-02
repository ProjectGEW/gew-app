import React from 'react';

import { Container, PopUp, Title, Header } from './styles';

interface PopupPerfilConsultorProps {
  fechar: () => void;
  nome: string;
  cracha: number;
  email: string;
}

const PopupVerbaUtilizada: React.FC<PopupPerfilConsultorProps> = ({ nome, cracha, email, fechar }) => {
  return (
    <Container>
      <PopUp>
        <Title>
          <h1>VISUALIZAR PERFIL</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Header>
          <div className="header">
            <div>                            
              <div className="detalhe">
                <p>Nome:</p> 
                <p className="txt">{nome}</p>
              </div>
              <div className="detalhe">
                <p>CPF:</p> 
                <p className="txt">114.214.617-87</p>
              </div>
              <div className="detalhe">
                <p>Crachá:</p> 
                <p className="txt">{cracha}</p></div>
              <div className="detalhe">
                <p>Email:</p> 
                <p className="txt">{email}</p>
              </div>
              <div className="detalhe">
                <p>Telefone:</p> 
                <p className="txt">(47) 97621-3812</p>
              </div>
            </div>
            <div>
              <div>
                <div>FOTO</div>
              </div>
            </div>
          </div>
          <div className="projetos">
            <p>Remover o consultor não irá interferir nas horas dos projetos atrelados ao mesmo.</p>
            <button>Remover consultor</button>
          </div>
        </Header>
      </PopUp>
    </Container>
  );
}

export default PopupVerbaUtilizada;