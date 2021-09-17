import React, { useCallback, useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

import { Container, BoxDatas } from './styles';
//import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";

import api from "../../service/api";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Projects: React.FC = () => {
    const [file, setFile] = useState<Blob>();
    const [downloadUri, setDownloadUri] = useState();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0]);
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

        await api.put(`projetos/horas/182210`, {horas: horas});
    }

    const [value, onChange] = useState(new Date());

    function teste() {
        alert(value);
    }
    
    return (
        <>
        <Navbar />
        <MenuLeft />

        <Container>
            <BoxDatas>
                <form>
                    <div>
                        <label>Data de ínicio:</label>
                        <label>Data de término:</label>
                        <label>Data de aprovação:</label>
                    </div>
                    <div>
                        <input type="text" />
                        <button onClick={teste}>lupa</button>
                        <input type="text" />
                        <button onClick={teste}>lupa</button>
                        <input type="text" />
                        <button onClick={teste}>lupa</button>
                    </div>
                    <div>
                        <button>Continuar</button>
                    </div>
                </form>
            </BoxDatas>
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}  
                />
            </div>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Projects;