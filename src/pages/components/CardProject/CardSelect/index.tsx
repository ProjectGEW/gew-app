import React, { useState, useEffect } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Link } from './style';

import api from "../../../../service/api";
import analisaValor from "../../../../utils/analisaValor";

interface CardStatusColor {
    numeroDoProjeto: number;
}

interface IProjeto {
    infoprojetoDTO: {
        numeroDoProjeto: number;
        titulo: string;
        status: string;
        secao: string;
    };
    valoresTotaisDTO: {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };
}

const CardProject: React.FC<CardStatusColor> = ({numeroDoProjeto}) => {
    const [projeto, setProjeto] = useState<IProjeto>();

    useEffect(() => {
        api.get(`projetos/${numeroDoProjeto}`).then((response) => {
            setProjeto(response.data);
        })
    })

    return (
        <>
        <Link href={`consultants/${numeroDoProjeto}`}>
            <Card>
                <CardStatus statusColor={projeto ? projeto.infoprojetoDTO.status : ""}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>{projeto ? projeto.infoprojetoDTO.numeroDoProjeto : 0} - {projeto ? projeto.infoprojetoDTO.secao : ""}</p>
                            <h1>WEC - IMPLATAÇÃO DE EDI CLIENTE XYZ</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> {analisaValor(projeto ? projeto.valoresTotaisDTO.valorTotalCcPagantes : 0)}</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> {projeto ? projeto.valoresTotaisDTO.valorTotalEsforco : 0} Horas</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </Link>
        </>
    );
}

export default CardProject;