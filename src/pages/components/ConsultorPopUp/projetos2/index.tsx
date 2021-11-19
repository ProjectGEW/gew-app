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

interface CardContent {
    infoprojetoDTO : {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        status: string;
        horas_apontadas: number;
    };
    ccPagantes: [{
        secao: {
            id: number;
            responsavel: {
              numero_cracha: number;
              nome: string;
              cpf: string;
              valor_hora: number;
            };
            nome: string;
        },
        percentual: number;
        valor: number;
    }];
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const PopupVerbaUtilizada: React.FC<PopupVerbaUtilizadaProps> = ({ cracha, projetoSelecionado, fechar }) => {
    //const [projeto, setProjeto] = useState<CardContent[]>([]);
    const [consultores, setConsultores] = useState<IConsultor[]>([]);
    const [guardaProjeto, setGuardaProjeto] = useState([]);

    async function conexaoApi() {
        try {
            // api.get<CardContent[]>(`projetos/${projetoSelecionado}`).then((response => {
            //     setProjeto(response.data);
            // }));
        
            api.get<IConsultor[]>(`funcionarios/consultor`).then((response => {
                setConsultores(response.data);
            })); 
        } catch(e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        conexaoApi();
    },[]);
    
    
    const identifica = consultores.filter(retorna => retorna.numero_cracha === cracha);
    const salva = identifica.map(retorna => retorna.projetos);
    
    const asd = consultores.filter(a => a.numero_cracha === cracha).map(a => a.projetos);
    
    asd.forEach(a => a)

    return (
        <Container>
            <PopUp>
                <Title>
                    <h1>PROJETOS</h1>
                    <span onClick={() => fechar()} />
                </Title>
                <Scroll>    
                    {
                        asd.map(a => a.forEach(a => a))
                    }
                </Scroll>
            </PopUp>
        </Container>
    );
}

export default PopupVerbaUtilizada;