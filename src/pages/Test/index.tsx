/* Arquivo para realizar testes gerais */

import React, { useState, useCallback } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

import { Container } from './styles';
import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";

import api from "../../service/api";

import 'react-calendar/dist/Calendar.css';

import Popup from 'reactjs-popup';
import './estiloPopup.css';

import { successfulNotify } from '../../hooks/SystemToasts';

import CardEsqueleto from '../components/CardProject/CardEsqueleto';
import analisaValor from '../../utils/analisaValor';

const Projects: React.FC = () => {
    const [file, setFile] = useState<Blob>();
    //const [ur, setUr] = useState('');
    const [downloadUri, setDownloadUri] = useState();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0]);
       // setUr(URL.createObjectURL(acceptedFiles));
    }, [])

    const {getRootProps, getInputProps} = useDropzone({
        multiple: false, 
        onDropAccepted: onDrop,
    });

    const {ref, ...rootProps} = getRootProps();

    const uploadFile = async () => {
        try {
            const formData = new FormData();

            formData.append("file", file ? file : "");

            const response = await api.post(`files/upload/2`, formData);

            setDownloadUri(response.data.fileDownloadUri);
        } catch(err: any) {
            alert(err.message);
        }
    }

    const downloadFile = async () => {
        window.open(downloadUri);
    }

    async function apontarHoras() {
        const input = (document.getElementById("horas") as HTMLInputElement).value;

        const horas = parseInt(input);

        await api.put(`projetos/horas/182247/67235`, {horas: horas});

        let addTarefa = {user: "67235", projeto: "182247"}
        localStorage.setItem('Notification', JSON.stringify(addTarefa));
    }

    function teste() {
        let addTarefa = {user: "67235", projeto: "182247"}
        localStorage.setItem('Notification', JSON.stringify(addTarefa));
    }
    
    return (
        <>
        <Navbar />
        <MenuLeft />

        <Container>
            <h1>Apontar horas</h1>
            <input type="number" id="horas" />
            <button onClick={apontarHoras}>Enviar</button>
            <div ref={ref}>
                <Paper {...rootProps}>
                    <label htmlFor="ata1">UPLOAD</label>
                    <input id="ata" {...getInputProps()}/>
                </Paper>
                <button onClick={uploadFile}>Enviar</button>
            </div>
            <button onClick={downloadFile}>Baixar</button>
            <button onClick={() => successfulNotify('Projeto cadastrado com sucesso!')}>Testar popup</button>
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
            <button onClick={() => window.location.replace("/projects")}>Teste rota</button>
            <button onClick={teste}>Testar localstorage</button>
            <p>{analisaValor(0)}</p>
            <CardEsqueleto/>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Projects;