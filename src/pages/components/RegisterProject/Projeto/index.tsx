import React from 'react';

import Button from '../../Button';

import { Box } from './styles';

import { useState } from 'react';

const Projeto: React.FC = () => {
    const [data, setData] = useState("");

    function teste() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }
    
    return (
        <>
        <Box>
            <div>
                <label>Número do projeto:</label>
                <input type="text" />
                
                <label>Título do projeto:</label>
                <input type="text" />

                <label>Descrição do projeto:</label>
                <textarea />
            </div>
            <div>
                <p>Ata de aprovação:</p>
                <label htmlFor="ata">{data ? data : "SELECIONAR ARQUIVO"}</label>
                <input type="file" id="ata" onClick={teste} />

                <Button tipo={"Projeto"} text={"Continuar"} />
            </div>
        </Box>
        </>    
    );
};

export default Projeto;