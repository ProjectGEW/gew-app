import React, { useEffect, useState } from 'react';

import api from '../../../service/api';
import analisaValor from '../../../utils/analisaValor';
import retornaTituloMenor from '../../../utils/tituloMenor';

import { P, Texto } from '../verbaUtilizada/styles';

interface IListaProps {
    numeroDoProjeto: number;
    tituloDoProjeto: string;
}

interface ITotal {
    total: number;
}

const ListaProjetos: React.FC<IListaProps> = ({numeroDoProjeto, tituloDoProjeto}) => {
    const [countVerbaTotalPorProjeto, setCountVerbaTotalPorProjeto] = useState<ITotal>();
    const [countVerbaTotal, setCountVerbaTotal] = useState<ITotal>();

    useEffect(() => {
        api.get<ITotal>(`projetos/count/verba/${numeroDoProjeto}`).then((response => {
            setCountVerbaTotalPorProjeto(response.data)
        })); 

        api.get<ITotal>(`projetos/count/verba/0`).then((response => {
            setCountVerbaTotal(response.data)
        })); 
    }, [numeroDoProjeto]);

    console.log(countVerbaTotal!?.total);

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
            <p>{
                countVerbaTotalPorProjeto ?
                    countVerbaTotalPorProjeto.total === 0 ? 0
                    : analisaValor(countVerbaTotalPorProjeto.total) 
                : analisaValor(0)
            }</p>
            <p>{
                countVerbaTotalPorProjeto && countVerbaTotal ?
                    countVerbaTotalPorProjeto.total === 0 ? 0 
                    : ((countVerbaTotalPorProjeto.total / countVerbaTotal.total ) * 100).toFixed(1)
                : 0
            }%</p>
        </div>             
    );
}

export default ListaProjetos;