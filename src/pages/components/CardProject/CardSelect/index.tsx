import React, { useState, useEffect } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Link } from './style';

import api from "../../../../service/api";
import analisaValor from "../../../../utils/analisaValor";

import intl from 'react-intl-universal';

const locales = {
    'pt-BR': require('../../../../language/pt-BR.json'),
    'en-US': require('../../../../language/en-US.json'),
    'es': require('../../../../language/es.json'),
    'fr-FR': require('../../../../language/fr-FR.json'),
};

interface CardStatusColor {
    numeroDoProjeto: number;
}

interface IProjeto {
    infoprojetoDTO: {
        numeroDoProjeto: number;
        titulo: string;
        statusProjeto: string;
        secao: string;
    };
    valoresTotaisDTO: {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };
}

const CardProject: React.FC<CardStatusColor> = ({numeroDoProjeto}) => {
    const [language] = useState(() => {
    let languageStorage = localStorage.getItem('Language');

    if(languageStorage) {
        let languageObject = JSON.parse(languageStorage);
        return languageObject;
    } 
    });

    intl.init({
        currentLocale: language.code,
        locales
    });

    const [projeto, setProjeto] = useState<IProjeto>();

    useEffect(() => {
        api.get(`projetos/${numeroDoProjeto}`).then((response) => {
            setProjeto(response.data);
        })
    });

    return (
        <>
        <Link href={`http://localhost:3000/consultants/${numeroDoProjeto}`}>
            <Card>
                <CardStatus statusColor={projeto ? projeto.infoprojetoDTO.statusProjeto : ""}/>
                <CardBox>
                <BoxLeft>
                    <div>
                        <p>{projeto ? projeto.infoprojetoDTO.numeroDoProjeto : "00000000"} - {projeto ? projeto.infoprojetoDTO.secao : "ABC"}</p>
                        <h1>{projeto ? projeto.infoprojetoDTO.titulo : ""}</h1>
                    </div>
                    <div>
                        <p><strong>{intl.get('card_projetos.saldo_um')}</strong>{analisaValor(15000)}</p>
                        <p><strong>{intl.get('card_projetos.saldo_dois')}</strong>{analisaValor(10000)}</p>
                    </div>
                </BoxLeft>
                <BoxRight>
                    <div>
                        <p>{intl.get('card_projetos.status')} <strong>Não iniciado</strong></p>
                    </div>
                    <div>
                        <p><strong>{intl.get('card_projetos.horas')}:</strong> <AiOutlineClockCircle size={15} /> 
                            {50} {intl.get('card_projetos.horas')}
                        </p>
                    </div>
                </BoxRight>
                </CardBox>
            </Card>
        </Link>
        </>
    );
}

export default CardProject;