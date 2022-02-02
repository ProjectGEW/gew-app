import React, {useState, useEffect} from "react";

import api from "../../../service/api";

import { Link } from "react-router-dom";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight } from './styles';

import analisaValor from "../../../utils/analisaValor"

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { errorfulNotify } from "../../../hooks/SystemToasts";

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

interface Coutverba {
  total: number;
}

const CardProject: React.FC<CardStatusColor> = ({numeroDoProjeto}) => {

  const [projeto, setProjeto] = useState<CardContent>();
  const [status, setStatus] = useState('');
  const [valorConsumido, setValorConsumido] = useState<Coutverba>();
  
  const handleProject = async () => {
    try {
      await api.get<CardContent>(`/projetos/${numeroDoProjeto}`)
        .then((response => {
          setProjeto(response.data);
          setStatus(response.data.projetoData.statusProjeto);
        })).catch(() => errorfulNotify("Não foi possível encontrar os projetos."));

      await api.get<Coutverba>(`projetos/count/verba/${numeroDoProjeto}`)
        .then((response => {
          setValorConsumido(response.data);
        })).catch(() => errorfulNotify("Não foi possível encontrar as seções."));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleProject();
  }, []);

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
              <p><strong>Saldo restante:</strong>{analisaValor(projeto?.valoresTotais.valorTotalDespesas ? projeto?.valoresTotais.valorTotalDespesas - valorConsumido!?.total : 0)}</p>
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