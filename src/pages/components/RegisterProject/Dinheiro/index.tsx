import React from 'react';

//import Button from '../../Button';

import { Box, Table, Linha } from './styles';

const Dinheiro: React.FC = () => {   
    return (
        <>
        <Box>
            <Table>
                <div>
                    <h1>Despesas (desembolsos)</h1>
                    <h1>Esforço</h1>
                    <h1>Valor(R$)</h1>
                </div>
                <Linha>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </Linha>
            </Table>
            <Table>
                <div>
                    <h1>Centro de Custo</h1>
                    <h1>Responsável pelo CC</h1>
                    <h1>Percentual</h1>
                    <h1>Valor(R$)</h1>
                </div>
                <Linha>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </Linha>
            </Table>
        </Box>
        </>    
    );
};

export default Dinheiro;