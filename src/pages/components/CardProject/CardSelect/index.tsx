import React from "react";

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Link } from './style';

interface CardStatusColor {
    statusColor: string;
}

const CardProject: React.FC<CardStatusColor> = ({statusColor}) => {
    return (
        <>
        <Link href="consultants">
            <Card>
                <CardStatus statusColor={statusColor}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>1000025562 - Seção ABC</p>
                            <h1>WEC - IMPLATAÇÃO DE EDI CLIENTE XYZ</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> R$ 50.000,00</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> 120 Horas</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </Link>
        </>
    );
}

export default CardProject;