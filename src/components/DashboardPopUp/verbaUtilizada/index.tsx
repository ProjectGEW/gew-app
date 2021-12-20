import React, { useEffect, useState } from 'react';

import api from '../../../service/api';

import ListaProjetos from '../ListaProjetos';

import { Container, PopUp, Title, Graph, Scroll, Bar, Value } from './styles';

interface PopupVerbaUtilizadaProps {
    valor: number;
    status: string;
    fechar: () => void;
}

interface CardContent {
    projetoData: {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        data_de_aprovacao: string;
        statusProjeto: string;
        horas_apontadas: number;
        secao: string,
    };
    secoesPagantes : [{
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
    valoresTotais : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const PopupVerbaUtilizada: React.FC<PopupVerbaUtilizadaProps> = ({status, valor, fechar }) => {
    const [projetos, setProjetos] = useState<CardContent[]>([]);
    const [countVerbaTotal, setCountVerbaTotal] = useState();

    async function handleProject() {
        try {
            api.get<CardContent[]>(`projetos`).then((response => {
                setProjetos(response.data);
            }));

            api.get(`projetos/count/verba/0`).then((response => {
                setCountVerbaTotal(response.data);
            })); 
        } catch(e) {
            console.log("🚀 ~ file: index.tsx ~ line 62 ~ e", e);        
        }
    }

    console.log(countVerbaTotal);

    useEffect(() => {
        handleProject();
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
                        projetos ? 
                            status === "TODOS" ?
                                projetos.map((projeto, index) => 
                                    projeto.projetoData.horas_apontadas !== 0 ? 
                                        <ListaProjetos key={index} 
                                            numeroDoProjeto={projeto.projetoData.numeroDoProjeto} 
                                            tituloDoProjeto={projeto.projetoData.titulo}
                                        />
                                    : ''
                                ) : 
                                projetos.map((projeto, index) => 
                                    projeto.projetoData.horas_apontadas !== 0 && projeto.projetoData.statusProjeto === status ? 
                                        <ListaProjetos key={index} 
                                            numeroDoProjeto={projeto.projetoData.numeroDoProjeto} 
                                            tituloDoProjeto={projeto.projetoData.titulo}
                                        />
                                    : ''
                                )
                        : ''
                    }
                </Scroll>
                <Graph>
                    <Bar>
                        <Value valor={valor}>
                            {/* <h1>{valor}%</h1> */}
                        </Value>
                    </Bar>
                </Graph>
            </PopUp>
        </Container>
    );
}

export default PopupVerbaUtilizada;