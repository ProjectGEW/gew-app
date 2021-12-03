import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';

import ListaProjetos from '../listaProjetos';

import { Container, PopUp, Title, Scroll } from './styles';

interface PopupVerbaUtilizadaProps {
    cracha: number;
    projetoSelecionado: number;
    fechar: () => void;
}

interface IConsultor {
    numero_cracha: number;
    status: string;
    nome: string;
    email: string;
    projetos: number[];
}

const PopupProjetosConsultor: React.FC<PopupVerbaUtilizadaProps> = ({ cracha, projetoSelecionado, fechar }) => {
    const [consultor, setConsultore] = useState<IConsultor>();

    async function conexaoApi() {
        try {
            api.get<IConsultor>(`funcionarios/consultor/${cracha}`).then((response => {
                setConsultore(response.data);
            })); 
        } catch(e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        conexaoApi();
    },[]);

    return (
        <Container>
            <PopUp>
                <Title>
                    <h1>PROJETOS</h1>
                    <span onClick={() => fechar()} />
                </Title>
                <Scroll>    
                    {
                        consultor ? consultor?.projetos.length > 1 ?
                            consultor.projetos.map((res, index) => <ListaProjetos key={index} numeroDoProjeto={res}/>)
                            : ''
                        : ''
                    }
                </Scroll>
            </PopUp>
        </Container>
    );
}

export default PopupProjetosConsultor;