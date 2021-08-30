import React from 'react';

import Button from '../../Button';

import { Box, Table, Linha, Total } from './styles';

const Dinheiro: React.FC = () => {   
    return (
        <>
        <Box>
            <Table>
                <div id="first-table">
                    <h1>Despesas (desembolsos)</h1>
                    <h1>Esforço</h1>
                    <h1>Valor (R$)</h1>
                </div>
                <div id="first-scroll">
                    <Linha>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </Linha>
                    <Total>
                        <input type="text" />
                        <input type="text" />
                    </Total>
                </div>
            </Table>
            <Table>
                <div id="second-table">
                    <h1>Centro de Custo</h1>
                    <h1>Responsável</h1>
                    <h1>Percentual</h1>
                    <h1>Valor (R$)</h1>
                </div>
                <div id="second-scroll">
                    <Linha>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </Linha>
                    <Total>
                        <input type="text" />
                        <input type="text" />
                    </Total>
                </div>
            </Table>
        </Box>
        <Button tipo={"Dinheiro"} text={"Continuar"} />
        </>    
    );
};

export default Dinheiro;