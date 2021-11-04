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
                                <p className="txt"></p>
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
                                <p className="txt"></p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>FOTO</div>
                            </div>
                        </div>
                    </div>
                </Header>
            </PopUp>
        </Container>
    );
}

export default PopupVerbaUtilizada;