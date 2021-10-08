import React, { useState, useEffect } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, PageContainer } from './styles';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Button from '../../components/Button';
import { useParams } from 'react-router';
import api from '../../../service/api';
import ContainerChild from '../../components/ContainerChild';
import Subtittle from '../../components/Subtittles';

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
                    <ContainerChild tipo={'EditLeft'}>
                        <Subtittle tipo={'ProjectData'} text={'Dados do Projeto'} />
                    </ContainerChild>
                    <ContainerChild tipo={'EditRight'}>

                    </ContainerChild>
                </Container>

                <Button tipo={'editProjetos'} text={'Confirmar'} />
            </PageContainer>
        </>
        );
};

export default Edit;