import React from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight } from './styles';

interface CardStatusColor {
    statusColor: string;
}

const CardProject: React.FC<CardStatusColor> = ({statusColor}) => {
    return (
        <>
            <Card>
                <CardStatus statusColor={statusColor}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>1000025562 - Seção ABC</p>
                            <h1>WEC - IMPLATAÇÃO DE EDI CLIENTE</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> R$ 50.000,00</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <FaEdit size={25}/>
                        </div>
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> 120 Horas</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </>
    );
}

export default CardProject;