import React from 'react';

import { RiErrorWarningFill } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { ContainerRegister, Info, Content, Line, Box } from './styles';

import { useState } from 'react';

const Datas: React.FC = () => {
    const [data, setData] = useState("");

    function teste() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }
    
    return (
        <>
        <ContainerRegister>
            <Info>
                <h1>Cadastrar Projeto</h1>
            </Info>
            <Content>
                <Line>
                    <div>
                        <p>Projeto</p>
                        <IoIosCheckmarkCircle />
                    </div>
                    <div>
                        <p>Responsáveis</p>
                        <RiErrorWarningFill />
                    </div>
                    <div>
                        <p>R$</p>
                        <RiErrorWarningFill />
                    </div>
                    <div>
                        <p>Datas</p>
                        <RiErrorWarningFill />
                    </div>
                </Line>
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

                        <button type="submit">Continuar</button>
                    </div>
                </Box>
            </Content>
        </ContainerRegister>
        </>    
    );
};

export default Datas;