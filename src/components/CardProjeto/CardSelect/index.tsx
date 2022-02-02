import React, { useState, useEffect } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Link } from './style';

import api from "../../../service/api";
import analisaValor from "../../../utils/analisaValor";

import intl from 'react-intl-universal';

import { errorfulNotify } from "../../../hooks/SystemToasts";

import formatStatus from "../../../utils/formatStatus";

const locales = {
    'pt-BR': require('../../../language/pt-BR.json'),
    'en-US': require('../../../language/en-US.json'),
    'es': require('../../../language/es.json'),
    'fr-FR': require('../../../language/fr-FR.json'),
};

interface CardStatusColor {
    numeroDoProjeto: number;
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

interface Coutverba {
    total: number;
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

    const [projeto, setProjeto] = useState<CardContent>();
    const [valorConsumido, setValorConsumido] = useState<Coutverba>();

    const handleProject = async () => {
        try {
          await api.get<CardContent>(`/projetos/${numeroDoProjeto}`)
            .then((response => {
              setProjeto(response.data);
            })).catch(() => errorfulNotify("Não foi possível encontrar os projetos."));

            await api.get<Coutverba>(`projetos/count/verba/${numeroDoProjeto}`)
            .then((response => {
                setValorConsumido(response.data);
            })).catch(() => errorfulNotify("Não foi possível encontrar as seções."));
        } catch (e) {
          console.log(e);
        }
      }
    
      useEffect(() => {
        handleProject();
      }, []);

    return (
        <>
        <Link href={`http://localhost:3000/consultants/${numeroDoProjeto}`}>
            <Card>
                <CardStatus statusColor={projeto ? projeto.projetoData.statusProjeto : ""}/>
                <CardBox>
                <BoxLeft>
                    <div>
                        <p>{projeto ? projeto.projetoData.numeroDoProjeto : "00000000"} - {projeto ? projeto.projetoData.secao : "ABC"}</p>
                        <h1>{projeto ? projeto.projetoData.titulo : ""}</h1>
                    </div>
                    <div>
                    <p><strong>{intl.get('card_projetos.saldo_um')}</strong>{analisaValor(projeto ? projeto.valoresTotais.valorTotalDespesas : 0)}</p>
                <p><strong>{intl.get('card_projetos.saldo_dois')}</strong>{analisaValor(projeto ? projeto.valoresTotais.valorTotalDespesas - valorConsumido!?.total : 0)}</p>
                    </div>
                </BoxLeft>
                <BoxRight>
                    <div>
                        <p>{intl.get('card_projetos.status')} <strong>{formatStatus(projeto ? projeto.projetoData.statusProjeto : '')}</strong></p>
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