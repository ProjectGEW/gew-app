import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';

import retornaTituloMenor from '../../../../utils/tituloMenor';

import { P, Texto } from '../../DashboardPopUp/verbaUtilizada/styles';

import { successfulNotify } from '../../../../hooks/SystemToasts';

interface IListaProps {
    numeroDoProjeto: number;
    cracha: number;
}

interface CardContent {
    infoprojetoDTO : {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        statusProjeto: string;
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

interface IConsultor {
    numero_cracha: number;
    status: string;
    nome: string;
    email: string;
    projetos: number[];
}

const ListaProjetos: React.FC<IListaProps> = ({ numeroDoProjeto, cracha }) => {
    const [projeto, setProjeto] = useState<CardContent>();

    async function conexaoApi() {
        try {
            api.get<CardContent>(`projetos/${numeroDoProjeto}`).then((response => {
                setProjeto(response.data);
            }));        
        } catch(e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        conexaoApi();
    },[]);

    async function removerProjeto() {
        try {
            await api.delete(`projetos/desalocar/${numeroDoProjeto}/${cracha}`);
            successfulNotify(`Projeto ${numeroDoProjeto} removido do funcionário ${cracha}.`);
        } catch(e) {
            console.log(e);
        }
    }

    const tituloDoProjeto = projeto?.infoprojetoDTO.titulo;

    return (
        <div className="projeto">
            <P trigger={
                tituloDoProjeto ? 
                    tituloDoProjeto.length <= 20 ? 
                        <p>{tituloDoProjeto}</p>
                    : <p>{retornaTituloMenor(tituloDoProjeto, 24)}</p>
                : <p>Projeto não encontrado!</p>
            } position="top center" on={['hover']}>
                <Texto>{
                    tituloDoProjeto ? 
                        tituloDoProjeto
                    : '...'
                }</Texto>
            </P>
            <p>{numeroDoProjeto ? numeroDoProjeto : 0}</p>
            <button onClick={() => removerProjeto()}>Remover</button>
        </div>             
    );
}

export default ListaProjetos;