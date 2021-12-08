import React from 'react';

import Button from '../../Button';

import { BoxResponsavel } from './styles';

const Responsavel: React.FC = () => {   
    return (
        <>
        <BoxResponsavel>
            <form action="" method="post">
                <div>
                    <label>Nome do responsável:</label>
                    <input type="text" />
                    
                    <label>Nome do solicitante:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Seção do responsável:</label>
                    <input type="text" />
                    <Button tipo={"Lupa"} text={""} />
                    
                    <label>Seção do solicitante:</label>
                    <input type="text" />
                    <Button tipo={"Lupa"} text={""} />

                    <Button tipo={"Responsavel"} text={"Continuar"} />
                </div>
            </form>
        </BoxResponsavel>
        </>    
    );
};

export default Responsavel;