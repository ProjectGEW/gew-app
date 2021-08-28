import React from 'react';

import Button from '../../Button';

import { Box } from './styles';

const Datas: React.FC = () => {   
    return (
        <>
        <Box>
            <div>
                <label>Data de ínicio:</label>
                <label>Data de término:</label>
                <label>Data de aprovação:</label>
            </div>
            <div>
                <input type="text" />
         
                <input type="text" />
        
                <input type="text" />
            </div>
            <div>
                <Button tipo={"Responsavel"} text={"Continuar"} />
            </div>
        </Box>
        </>    
    );
};

export default Datas;