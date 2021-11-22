import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';
import retornaTituloMenor from '../../../../utils/tituloMenor';

import { P, Texto } from '../../DashboardPopUp/verbaUtilizada/styles';

import '../../../Test/estiloPopup.css';
import '../../../Test/estiloPopupModal.css';

interface IListaProps {
    numeroDoProjeto: number;
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

const ListaProjetos: React.FC<IListaProps> = ({numeroDoProjeto}) => {
    const [projeto, setProjeto] = useState<CardContent>();
    console.log(numeroDoProjeto);
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

    //console.log(projeto);
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
            <button>Remover</button>
        </div>             
    );
}

export default ListaProjetos;