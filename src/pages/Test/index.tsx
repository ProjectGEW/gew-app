import React, { useCallback, useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

import { Container } from './styles';
import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";

import api from "../../service/api";

const Projects: React.FC = () => {
    const [file, setFile] = useState<Blob>();
    const [downloadUri, setDownloadUri] = useState();
    const [fileName, setFileName] = useState<string>();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0]);
        setFileName(acceptedFiles[0].name);
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

            const response = await api.post(`files/upload/1`, formData);

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

        await api.put(`projetos/horas/182210`, {horas: horas});
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
                    <input {...getInputProps()}/>
                </Paper>
                <button onClick={uploadFile}>Enviar</button>
            </div>

            <button onClick={downloadFile}>Baixar</button>
            <input type="text" id="teste"/>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Projects;