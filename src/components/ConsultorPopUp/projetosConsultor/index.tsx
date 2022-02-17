import React, { useEffect, useState } from 'react';

import api from '../../../service/api';

import ListaProjetos from '../listaProjetos';

import { Container, PopUp, Title, Scroll } from './styles';

interface PopupVerbaUtilizadaProps {
    cracha: number;
    projetoSelecionado: number;
    fechar: () => void;
    atualizarDados: () => void;
}

interface IConsultor {
    funcionarioData: {
        numero_cracha: number;
        status: string;
        nome: string;
        email: string;
    },
    projetos: number[];
    skills: [];
    fornecedor: string;
    status: boolean;
}

const PopupProjetosConsultor: React.FC<PopupVerbaUtilizadaProps> = ({ cracha, projetoSelecionado, fechar, atualizarDados }) => {
    const [consultor, setConsultore] = useState<IConsultor>();

    async function conexaoApi() {
        try {
            await api.get<IConsultor>(`consultores/${cracha}`).then((response => {
                setConsultore(response.data);
            })); 
        } catch(e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        conexaoApi();
    });

    return (
        <Container>
            <PopUp>
                <Title>
                    <h1>PROJETOS</h1>
                    <span onClick={() => fechar()} />
                </Title>
                <Scroll>    
                    {
                        consultor ? consultor.projetos ?
                            consultor.projetos.map((res, index) => 
                                <ListaProjetos 
                                    key={index} 
                                    numeroDoProjeto={res} 
                                    cracha={consultor.funcionarioData.numero_cracha}
                                    atualizarDados={atualizarDados}
                                />
                            )
                            : ''
                        : ''
                    }
                </Scroll>
            </PopUp>
        </Container>
    );
}

export default PopupProjetosConsultor;