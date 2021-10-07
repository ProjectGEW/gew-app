import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';

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
}

const ListaProjetos: React.FC = () => {
    const [projeto, setProjeto] = useState<CardContent>();
    const [countVerbaTotalPorProjeto, setCountVerbaTotalPorProjeto] = useState();
    const [countVerbaTotal, setCountVerbaTotal] = useState();

    useEffect(() => {
        api.get<CardContent>(`/projetos`).then((response => {
            setProjeto(response.data);
        }
    ))}, [projeto]);

    useEffect(() => {
        api.get(`/projetos/count/verba/` + 182251).then((response => {
            setCountVerbaTotalPorProjeto(response.data);
        }
    ))}, [countVerbaTotalPorProjeto]);

    useEffect(() => {
        api.get(`/projetos/count/verba/total`).then((response => {
            setCountVerbaTotal(response.data);
        }
    ))}, [countVerbaTotal]);

    const porcentagemPorProjeto = (Number(countVerbaTotalPorProjeto) / Number(countVerbaTotal)) * 100;
    
    return (
        <div className="projeto">
            <p>{projeto!.infoprojetoDTO.titulo.length <= 25 ? projeto!.infoprojetoDTO.titulo : "..."}</p>
            <p>{countVerbaTotalPorProjeto ? analisaValor(Number(countVerbaTotalPorProjeto)) : 0}</p>
            <p>{porcentagemPorProjeto}%</p>
        </div>             
    );
}

export default ListaProjetos;