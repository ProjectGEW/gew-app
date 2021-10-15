import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';
import retornaTituloMenor from '../../../../utils/tituloMenor';

import { P, Texto} from '../verbaUtilizada/styles';

import '../../../Test/estiloPopup.css';
import '../../../Test/estiloPopupModal.css';

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
            <P trigger={
                tituloDoProjeto ? 
                    tituloDoProjeto.length <= 20 ? 
                        <p>{tituloDoProjeto}</p>
                    : <p>{retornaTituloMenor(tituloDoProjeto, 23)}</p>
                : <p>Não encontrado</p>
            } position="top center" on={['hover']}>
                <Texto>{tituloDoProjeto}</Texto>
            </P>
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