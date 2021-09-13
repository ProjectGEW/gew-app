import React, { useState } from 'react';
import Button from '../../Button';
import RowDinheiro from './Row/RowDP';
import { BoxDinheiro, Table, Linha, Total } from './styles';

const Dinheiro: React.FC = () => {
    const [teste, setTeste] = useState<JSX.Element[]>([]);
    return (
        <>
            <BoxDinheiro>
                <form action="" method="post">
                    <Table>
                        <div id="first-table">
                            <h1>Despesas (desembolsos)</h1>
                            <h1>Esforço</h1>
                            <h1>Valor (R$)</h1>
                        </div>
                        <div id="first-scroll">
                            {teste.map(teste => teste)}
                            <Total>
                                <h2>TOTAL:</h2>
                                <input id="totalEsforco" type="text" defaultValue="1500h" className="alinhar" />
                                <input id="totalValor" type="text" defaultValue="40.000,00" className="alinhar" />
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
                        </div>
                    </Table>
                    <Button tipo={"Dinheiro"} text={"Continuar"} />
                </form>
            </BoxDinheiro>
        </>
    );
};

export default Dinheiro;