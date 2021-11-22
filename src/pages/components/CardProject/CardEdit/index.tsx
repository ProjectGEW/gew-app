import React, {useState, useEffect} from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import api from "../../../../service/api";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight } from './styles';

import analisaValor from "../../../../utils/analisaValor"
import { Link } from "react-router-dom";

interface CardStatusColor {
    numeroDoProjeto: number;
}

interface CardContent {
  infoprojetoDTO: {
      id: number;
      numeroDoProjeto: number;
      titulo: string;
      descricao: string;
      data_de_inicio: string;
      data_de_termino: string;
      statusProjeto: string;
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

    const [projeto, setProjeto] = useState<CardContent>();
    const [status, setStatus] = useState('');
    
    useEffect(() => {
      api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
            setProjeto(response.data);
            setStatus(response.data.infoprojetoDTO.statusProjeto);
      }))
    }, [numeroDoProjeto]);

    return (
        <>
            <Card>
                <CardStatus statusColor={status}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>{projeto?.infoprojetoDTO.numeroDoProjeto}</p>
                            <h1>{projeto?.infoprojetoDTO.titulo}</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong>{analisaValor(projeto?.valoresTotaisDTO.valorTotalDespesas ? projeto?.valoresTotaisDTO.valorTotalDespesas : 0)}</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                          <Link to={`/edit/${projeto?.infoprojetoDTO.numeroDoProjeto}`}>
                            <FaEdit size={25}/>
                          </Link>
                        </div> 
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> {projeto?.valoresTotaisDTO.valorTotalEsforco}</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </>
    );
}

export default CardProject;