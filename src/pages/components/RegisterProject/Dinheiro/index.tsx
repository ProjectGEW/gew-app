import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import RowDinheiro from './Row';
import { Box, Table, Linha, Total } from './styles';

const Dinheiro: React.FC = () => {
    const [teste, setTeste] = useState<JSX.Element[]>([<RowDinheiro />]);
    return (
        <>
            <Box>
                <form action="" method="post">
                    <Table>
                        <div id="first-table">
                            <h1>Despesas (desembolsos)</h1>
                            <h1>Esforço</h1>
                            <h1>Valor (R$)</h1>
                        </div>
                        <div id="first-scroll">
                            {teste.map(teste => teste)}
                            <div onClick={() => { setTeste([...teste, <RowDinheiro />]) }}>TESTE</div>
                            <Total>
                                <h2>TOTAL:</h2>
                                <input id="totalEsforco" type="text" value="1500h" className="alinhar" />
                                <input id="totalValor" type="text" value="40.000,00" className="alinhar" />
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
                                <input type="text" value="092765143111" />
                                <input type="text" value="André Borges Lima" />
                                <input type="text" value="50%" className="alinhar" />
                                <input type="text" value="23.500,00" className="alinhar" />
                            </Linha>
                            <Linha>
                                <input type="text" value="726542414314" />
                                <input type="text" value="Moacir De Camargo" />
                                <input type="text" value="50%" className="alinhar" />
                                <input type="text" value="23.500,00" className="alinhar" />
                            </Linha>
                            <Linha>
                                <input type="text" value="092765143111" />
                                <input type="text" value="André Borges Lima" />
                                <input type="text" value="50%" className="alinhar" />
                                <input type="text" value="23.500,00" className="alinhar" />
                            </Linha>
                            <Linha>
                                <input type="text" value="726542414314" />
                                <input type="text" value="Moacir De Camargo" />
                                <input type="text" value="50%" className="alinhar" />
                                <input type="text" value="23.500,00" className="alinhar" />
                            </Linha>
                        </div>
                    </Table>
                    <Button tipo={"Dinheiro"} text={"Continuar"} />
                </form>
            </Box>
        </>
    );
};

export default Dinheiro;