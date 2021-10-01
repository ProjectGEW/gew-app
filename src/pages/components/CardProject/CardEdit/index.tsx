import React, {useState, useEffect} from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import api from "../../../../service/api";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight } from './styles';

interface CardStatusColor {
    numeroDoProjeto: number;
}

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

const CardProject: React.FC<CardStatusColor> = ({numeroDoProjeto}) => {

    const [project, setProject] = useState<CardContent>();
    const [status, setStatus] = useState('');
    
    useEffect(() => {
      api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
            setProject(response.data);
            setStatus(response.data.infoprojetoDTO.status);
      }))
    }, [numeroDoProjeto]);

    console.log(status);
    return (
        <>
            <Card>
                <CardStatus statusColor={status}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>1000025562 - Seção ABC</p>
                            <h1>WEC - IMPLATAÇÃO DE EDI CLIENTE</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> R$ 50.000,00</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <FaEdit size={25}/>
                        </div> 
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> 120 Horas</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </>
    );
}

export default CardProject;