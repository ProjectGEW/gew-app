import React, { useState } from 'react';

import Button from '../../Button';

import { Box } from './styles';

const Responsavel: React.FC = () => {
    const [data, setData] = useState("");

    function teste() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }
    
    return (
        <>
        <Box>
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
        </Box>
        </>    
    );
};

export default Responsavel;