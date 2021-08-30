import React, { useState, useEffect } from 'react';
import { Inputs, ContainerDesc, ContainerInfos, ContainerSection,
        ContainerTittles, Tittle, Container, ContainerDetails, Box } from './style';
import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import api from '../../service/api'
import { ContIcons } from '../components/MenuRight/styles';
import { useParams } from 'react-router-dom';

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
    };
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

interface testeProps {
    id: number;
}

const Details: React.FC = () => {
    const { id }: {id: string}  = useParams();
    const [project, setProject] = useState<CardContent>();

    useEffect(() => {
        api.get<CardContent>(`/projetos/${id ? id : null}`).then((response => {
          setProject(response.data);
        }))
  
      }, []);
    console.log(project)
    return (
        <>
            <Navbar />
            <MenuLeft />
            <MenuRight>
                <ContIcons></ContIcons>
            </MenuRight>
            <Container>
                <ContainerDetails>
                <ContainerSection>
                    <h1>10000024870 - Seção ABC</h1>
                </ContainerSection>
                <ContainerTittles>
                    <Tittle>WEN - LANÇAMENTO CUSTO DOC. VENDAS EM GARANTIAS</Tittle>
                    <Inputs>
                        <label htmlFor="ata">DASHBOARD</label>
                        <input type="file" id="ata"/>
                        <label htmlFor="ata">ATA_CVPD_07_2020</label>
                        <input type="file" id="ata"/>
                    </Inputs>
                </ContainerTittles>
                <ContainerInfos>
                    <ul>
                        <li>
                            <h1>NÚMERO:</h1><h2></h2>
                        </li>
                        <li>
                            <h1>CC:</h1><h2>20111151</h2>
                        </li>
                        <li>
                            <h1>STATUS:</h1><h2>EM ANDAMENTO</h2>
                        </li>
                        <li>
                            <h1>DATA DE CRIAÇÃO:</h1><h2>01/08/2020</h2>
                        </li>
                    </ul>
                </ContainerInfos>
                <ContainerDesc>
                    <h1>Descrição:</h1>
                    <h2>Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV), envio
                        da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do cliente para
                        automatizar o envio de pedidos e atualização do próprio sistema através do EDI
                        (Eletronic Data Interchange). O Cliente já implementou este sistema nos principais fornecedores.
                    </h2>
                </ContainerDesc>
                <ContainerInfos>
                    <Box>
                        <h1>Solicitante / Seção Solicitante:</h1>
                        <h2>DIEGO CANVAS DE SOUZA - SEÇÃO ASSISTÊNCIA TÉCNICA</h2>
                    </Box>
                    <Box>
                        <h1>Responsável / Seção Responsável:</h1>
                        <h2>ANDRÉ CARLOS SILVA - INSIDE SALES DEPARTMENT</h2>
                    </Box>
                    <Box>
                        <h1>Aprovado Por:</h1>
                        <h2>LETÍCIA SCHIODINI DA CRIZ</h2>
                    </Box>
                </ContainerInfos>
                <ContainerDesc>
                    <h1>Descrição:</h1>
                    <h2>Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV), envio
                        da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do cliente para
                        automatizar o envio de pedidos e atualização do próprio sistema através do EDI
                        (Eletronic Data Interchange). O Cliente já implementou este sistema nos principais fornecedores.
                    </h2>
                </ContainerDesc>
                <ContainerDesc>
                    <h1>Descrição:</h1>
                    <h2>Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV), envio
                        da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do cliente para
                        automatizar o envio de pedidos e atualização do próprio sistema através do EDI
                        (Eletronic Data Interchange). O Cliente já implementou este sistema nos principais fornecedores.
                    </h2>
                </ContainerDesc>
                </ContainerDetails>
            </Container>
        </>
        );
};

export default Details;