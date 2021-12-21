import React, { useState, useEffect } from "react";

import PopUpCard from '../../CardPopUp';
import api from '../../../service/api';

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Progress, Value } from './styles';

import formatStatus from "../../../utils/formatStatus";
import analisaValor from "../../../utils/analisaValor";

import intl from 'react-intl-universal';
import { PopupModal } from "../../../pages/Dashboard/styles";

import { errorfulNotify } from "../../../hooks/SystemToasts";

const locales = {
    'pt-BR': require('../../../language/pt-BR.json'),
    'en-US': require('../../../language/en-US.json'),
    'es': require('../../../language/es.json'),
    'fr-FR': require('../../../language/fr-FR.json'),
};

interface CardProps {
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
}

interface Coutverba {
  total: number;
}

const CardProject: React.FC<CardProps> = ({ numeroDoProjeto }) => {
  const [language] = useState(() => {
    let languageStorage = localStorage.getItem('Language');

    if(languageStorage) {
      let languageObject = JSON.parse(languageStorage);
      return languageObject;
    } 
  });

  intl.init({
      currentLocale: language.code,
      locales
  });

  /*const token = localStorage.getItem('Token');
  let config = {
    headers: { Authorization: `Bearer ${token}`},
  };*/

  const [projeto, setProjeto] = useState<CardContent>();
  const [status, setStatus] = useState('');
  const [valorConsumido, setValorConsumido] = useState<Coutverba>();

  async function handleProject() {
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

  function calcularPorcentagem(count: number) {
    const total = projeto ? projeto.valoresTotais.valorTotalEsforco : 0;
    const porcentagem = (count / total) * 100;

    return Math.floor(porcentagem);
  }

  
  return (
    <>
    { projeto ? 
      <PopupModal closeOnEscape trigger={
        <Card key={projeto?.projetoData.id}>
          <CardStatus statusColor={status}/>
          <CardBox>
            <BoxLeft>
              <div>
                <p>{projeto ? projeto.projetoData.numeroDoProjeto : "00000000"} - {projeto ? projeto.projetoData.secao : "ABC"}</p>
                <h1>{projeto ? projeto.projetoData.titulo : ""}</h1>
              </div>
              <div>
                <p><strong>{intl.get('card_projetos.saldo_um')}</strong>{analisaValor(projeto ? projeto.valoresTotais.valorTotalDespesas : 0)}</p>
                <p><strong>{intl.get('card_projetos.saldo_dois')}</strong>{analisaValor(projeto ? projeto.valoresTotais.valorTotalDespesas - valorConsumido!?.total : 0)}</p>
              </div>
              <div>
                <p>{intl.get('card_projetos.data_um')} {projeto ? projeto.projetoData.data_de_inicio : "00/00/0000"}</p>
                <p>{intl.get('card_projetos.data_dois')} {projeto ? projeto.projetoData.data_de_termino : "00/00/0000"}</p>
              </div>
            </BoxLeft>
            <BoxRight>
              <div>
                <p>{intl.get('card_projetos.status')} <strong>{formatStatus(projeto ? projeto.projetoData.statusProjeto : '')}</strong></p>
              </div>
              <div>
                {projeto ? projeto.projetoData.statusProjeto !== "CONCLUIDO" ?
                  <>
                    <p><strong>{intl.get('card_projetos.horas')}:</strong> <AiOutlineClockCircle size={15} /> 
                      {projeto.valoresTotais.valorTotalEsforco} {intl.get('card_projetos.horas')}
                    </p>
                    <p><strong>{intl.get('card_projetos.apontadas')}:</strong> <AiOutlineClockCircle size={15} /> 
                      {projeto.projetoData.horas_apontadas} {intl.get('card_projetos.horas')}
                    </p>
                    <Progress>
                      <Value value={calcularPorcentagem(projeto ? projeto.projetoData.horas_apontadas : 0)} />
                    </Progress>
                  </>
                :
                  ''
                :
                  ''
                }
              </div>
            </BoxRight>
          </CardBox>
        </Card>
      } modal>
        {(close: any) => (
          <PopUpCard fechar={close} numeroDoProjeto={projeto.projetoData.numeroDoProjeto} />
        )}
      </PopupModal>
    : 
      ''
    }
    </>
  );
}

export default CardProject;