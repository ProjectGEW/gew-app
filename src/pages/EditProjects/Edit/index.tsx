import React, { useState } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, BoxProjeto, Box2, Box } from './styles';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Edit: React.FC = () => {
    const [data, setData] = useState("");

    function teste() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container> 
                <header>
                    <h1>Editar Projeto</h1>
                    <AiOutlineCaretDown />
                </header>
                <BoxProjeto>
                        <Box2>
                            <div id="numeroProjeto">
                                <label>Número do projeto:</label>
                                <input type="text" />
                            </div>
                            <div id="ata">  
                                <label htmlFor="ata">{data ? data : "SELECIONAR ARQUIVO"}</label>
                                <input type="file" id="ata" onClick={teste} />
                            </div>
                        </Box2>
                        <Box>
                            <div id="tituloProjeto">
                                <label>Título do projeto:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Descrição do projeto:</label>
                                <textarea />
                            </div>
                        </Box>
                </BoxProjeto>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default Edit;