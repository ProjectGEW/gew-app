import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';

/*interface CardContent {
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
    ccPagantes : [{
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
}*/

interface IListaProps {
    numeroDoProjeto: number;
    tituloDoProjeto: string;
}

const ListaProjetos: React.FC<IListaProps> = ({numeroDoProjeto, tituloDoProjeto}) => {
    const [countVerbaTotalPorProjeto, setCountVerbaTotalPorProjeto] = useState(0);
    const [countVerbaTotal, setCountVerbaTotal] = useState(0);

    useEffect(() => {
        api.get<number>(`projetos/count/verba/${numeroDoProjeto}`).then((response => {
            setCountVerbaTotalPorProjeto(response.data)
        })); 

        api.get<number>(`projetos/count/verba/total`).then((response => {
            setCountVerbaTotal(response.data)
        })); 
    }, [numeroDoProjeto]);

    return (
        <div className="projeto">
            <p>{tituloDoProjeto ? tituloDoProjeto.length <= 25 ? tituloDoProjeto : "..." : "Não encontrado"}</p>
            <p>{
                countVerbaTotalPorProjeto ?
                    countVerbaTotalPorProjeto === 0 ? 0
                    : analisaValor(countVerbaTotalPorProjeto) 
                : analisaValor(0)
            }</p>
            <p>{
                countVerbaTotalPorProjeto ?
                    countVerbaTotalPorProjeto === 0 ? 0 
                    : (countVerbaTotalPorProjeto / countVerbaTotal) * 100
                : 0
            }%</p>
        </div>             
    );

}

export default ListaProjetos;