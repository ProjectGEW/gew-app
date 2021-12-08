import React, { useEffect, useState } from 'react';

import api from '../../../service/api';

import retornaTituloMenor from '../../../utils/tituloMenor';

import { P, Texto } from '../../DashboardPopUp/verbaUtilizada/styles';

import { successfulNotify } from '../../../hooks/SystemToasts';

interface IListaProps {
    numeroDoProjeto: number;
    cracha: number;
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
    despesas: [{
      nome: string;
      esforco: number;
      valor: number;
    }];
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

    const tituloDoProjeto = projeto?.projetoData.titulo;

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