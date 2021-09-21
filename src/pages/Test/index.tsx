import React, { useCallback, useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

import { Container, BoxDatas, Error } from './styles';
//import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";

import api from "../../service/api";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Projects: React.FC = () => {
    // const [file, setFile] = useState<Blob>();
    // const [downloadUri, setDownloadUri] = useState();

    // const onDrop = useCallback((acceptedFiles) => {
    //     console.log(acceptedFiles);
    //     setFile(acceptedFiles[0]);
    // }, [])

    // const {getRootProps, getInputProps} = useDropzone({
    //     multiple: false, 
    //     onDropAccepted: onDrop,
    // });

    // const {ref, ...rootProps} = getRootProps();

    // const uploadFile = async () => {
    //     try {
    //         const formData = new FormData();

    //         formData.append("file", file ? file : "");

    //         const response = await api.post(`files/upload/2`, formData);

    //         setDownloadUri(response.data.fileDownloadUri);
    //     } catch(err: any) {
    //         alert(err.message);
    //     }
    // }

    // const downloadFile = async () => {
    //     window.open(downloadUri);
    // }

    // async function apontarHoras() {
    //     const input = (document.getElementById("horas") as HTMLInputElement).value;

    //     const horas = parseInt(input);

    //     await api.put(`projetos/horas/182210`, {horas: horas});
    // }

    const [value, onChange] = useState(new Date());
    const [selected, setSelected] = useState<string>();
    const [dataInicio, setDataInicio] = useState<string>();
    const [dataFim, setDataFim] = useState<string>();
    const [dataAprovacao, setDataAprovacao] = useState<string>();
    const [inputErrorInit, setInputErrorInit] = useState('');
    const [inputErrorFim, setInputErrorFim] = useState('');
    const [inputErrorAprov, setInputErrorAprov] = useState('');

    function setData(value: Date) {
        const dataFormat = value.getDate() + "/" + (value.getMonth() + 1) + "/" + value.getFullYear();
        if (selected === "inicio") {
            if (value.getFullYear() >= new Date().getFullYear()) {
                setDataInicio(dataFormat);
                setInputErrorInit("");
            } else {
                setInputErrorInit("Ano inválido");
            }
        } else if (selected === "fim") {
            const anoValidation = value.getFullYear() >= parseInt(dataInicio ? dataInicio.split("/")[2] : "") 
            || value.getFullYear() <= new Date().getFullYear() + 100;
            const mesValidation = value.getMonth() + 1 >= parseInt(dataInicio ? dataInicio.split("/")[1] : "");
            const diaValidation = value.getDate() >= parseInt(dataInicio ? dataInicio.split("/")[0] : "");
            if (anoValidation) {
                if (mesValidation) {
                    if (diaValidation) {
                        setDataFim(dataFormat);
                        setInputErrorFim("");
                    } else {
                        setInputErrorFim("Dia inválido");
                    }
                } else {
                    setInputErrorFim("Mês inválido");
                }
            } else {
                setInputErrorFim("Ano inválido");
            }
        } else if (selected === "aprovacao") {
            const validation = value.getFullYear() >= new Date().getFullYear() - 1;
            if (validation) { 
                setDataAprovacao(dataFormat);
                setInputErrorAprov("");
            } else {
                setInputErrorAprov("Ano inválido");
            }
        }
    }
    
    return (
        <>
        <Navbar />
        <MenuLeft />

        <Container>
            <BoxDatas hasErrorInit={!!inputErrorInit} hasErrorFim={!!inputErrorFim} hasErrorAprov={!!inputErrorAprov}>
                    <div>
                        <label>Data de ínicio:</label>
                        <label>Data de término:</label>
                        <label>Data de aprovação:</label>
                    </div>
                    <div>
                        <input id="dataInicio" type="text" value={dataInicio} onClick={() => {setSelected("inicio")}} />
                        <input id="dataFim" type="text" value={dataFim} onClick={() => {setSelected("fim")}} />
                        <input id="dataAprov" type="text" value={dataAprovacao} onClick={() => {setSelected("aprovacao")}} />
                    </div>
                    <div>
                        {inputErrorInit && <Error>{inputErrorInit}</Error>}
                        {inputErrorFim && <Error>{inputErrorFim}</Error>}
                        {inputErrorAprov && <Error>{inputErrorAprov}</Error>}
                    </div>
                    <div>
                        <button>Continuar</button>
                    </div>
            </BoxDatas>
            <Calendar className={"calendario"} value={value} onChange={onChange} onClickDay={(props) => {setData(props)}} />
            <div>
            </div>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Projects;