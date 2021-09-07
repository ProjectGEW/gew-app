import React from 'react';

import Button from '../../Button';

import { Box } from './styles';

const Responsavel: React.FC = () => {   
    return (
        <>
        <Box>
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
        </Box>
        </>    
    );
};

export default Responsavel;