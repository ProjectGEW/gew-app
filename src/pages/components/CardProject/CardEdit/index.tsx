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
    projetoData: {
      id: number;
      numeroDoProjeto: number;
      titulo: string;
      descricao: string;
      data_de_inicio: string;
      data_de_termino: string;
      data_de_aprovacao: string;
      statusProjeto: string;
      horas_apontadas: number;
      secao: string,
    };
    secoesPagantes : [{
      secao: {
        id: number;
        responsavel: {
          numero_cracha: number;
          nome: string;
          cpf: string;
          valor_hora: number;
        };
        nome: string;
      },
      percentual: number;
      valor: number;
    }];
    valoresTotais : {
      valorTotalCcPagantes: number;
      valorTotalDespesas: number;
      valorTotalEsforco: number;
    };  
    despesas: [{
      nome: string;
      esforco: number;
      valor: number;
    }];
  }

const CardProject: React.FC<CardStatusColor> = ({numeroDoProjeto}) => {

    const [projeto, setProjeto] = useState<CardContent>();
    const [status, setStatus] = useState('');
    
    useEffect(() => {
      api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
            setProjeto(response.data);
            setStatus(response.data.projetoData.statusProjeto);
      }))
    }, [numeroDoProjeto]);

    return (
        <>
            <Card>
                <CardStatus statusColor={status}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>{projeto?.projetoData.numeroDoProjeto}</p>
                            <h1>{projeto?.projetoData.titulo}</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong>{analisaValor(projeto?.valoresTotais.valorTotalDespesas ? projeto?.valoresTotais.valorTotalDespesas : 0)}</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                          <Link to={`/edit/${projeto?.projetoData.numeroDoProjeto}`}>
                            <FaEdit size={25}/>
                          </Link>
                        </div> 
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> {projeto?.valoresTotais.valorTotalEsforco}</p>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </>
    );
}

export default CardProject;