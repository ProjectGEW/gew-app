import React, { useState, useEffect } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, BoxContainer, Box2, Box, PageContainer } from './styles';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Button from '../../components/Button';
import { useParams } from 'react-router';
import api from '../../../service/api';

interface CardContent {
  infoprojetoDTO : {
      id: number;
      numeroDoProjeto: number;
      titulo: string;
      descricao: string;
      data_de_inicio: string;
      data_de_termino: string;
      status: string;
      horas_apontadas: number;
      secao: string;
  };
  valoresTotaisDTO : {
      valorTotalCcPagantes: number;
      valorTotalDespesas: number;
      valorTotalEsforco: number;
  };      
}

const Edit: React.FC = () => {
    const [data, setData] = useState("");
    const { numeroDoProjeto }: {numeroDoProjeto: string}  = useParams();

    function teste() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }

    const [projeto, setProjeto] = useState<CardContent>();

    useEffect(() => {
      api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
            setProjeto(response.data);
      }))
    }, [numeroDoProjeto]);

    return (
        <>
            <Navbar />
            <MenuLeft />

            <MenuRight>
                <ContIcons />
            </MenuRight>

            <PageContainer>
            <Container> 
                <header>
                    <h1>Editar Projeto</h1>
                    <AiOutlineCaretDown />
                </header>
                <BoxContainer>
                    <h1>Projeto</h1>
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
                </BoxContainer>
                <BoxContainer>
                    <h1>Responsáveis</h1>
                        <Box2>
                            <div id="half">
                                <label>Número do Responsável:</label>
                                <input type="text" />
                            </div>
                            <div id="half">  
                                <label>Seção do Responsável:</label>
                                <input type="text" />
                            </div>
                        </Box2>
                        <Box2>
                            <div id="half">
                                <label>Número do Solicitante:</label>
                                <input type="text" />
                            </div>
                            <div id="half">  
                                <label>Seção do Solicitante:</label>
                                <input type="text" />
                            </div>
                        </Box2>
                </BoxContainer>
                <BoxContainer>
                    <h1>Centros de Custo</h1>
                        <Box2>
                            <div id="box">
                                <label>Centro de Custo:</label>
                                <input type="text" />
                            </div>
                            <div id="box">  
                                <label>Percentual aprovado:</label>
                                <input type="text" />
                            </div>
                            <div id="box" className="bigger">
                                <label>Limite de horas aprovadas:</label>
                                <input type="text" />
                            </div>
                        </Box2>
                </BoxContainer>
                <BoxContainer>
                    <h1>Datas</h1>
                        <Box2>
                            <div id="box">
                                <label>Data de início:</label>
                                <input type="date" />
                            </div>
                            <div id="box">  
                                <label>Data término:</label>
                                <input type="date" />
                            </div>
                            <div id="box">
                                <label>Data de aprovação:</label>
                                <input type="date" />
                            </div>
                        </Box2>
                </BoxContainer>
                <Button tipo={'editProjetos'} text={'Confirmar'} />
            </Container>
            </PageContainer>
        </>
        );
};

export default Edit;