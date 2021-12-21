import React, { useState, useEffect } from 'react';

import Button from '../Button';

import GraphCircular from '../GraphCircular';

import api from '../../service/api';
import analisaValor from "../../utils/analisaValor";

import { DesktopModalContainer, ModalContainerGraphs, ModalContainerInfos, ContainerBox,
  ContainerObjectives, ContainerValues, HourGraphics, CostCenters } from './styles';

import { AiOutlineClockCircle } from "react-icons/ai";

interface PopUpCardProps {
  numeroDoProjeto: number;
  fechar: () => void;
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

const PopUpCard: React.FC<PopUpCardProps> = ({ numeroDoProjeto, fechar }) => {
    const [projeto, setProjeto] = useState<CardContent>();
    const [ata, setAta] = useState<string>(''); 
    const [valorConsumido, setValorConsumido] = useState<Coutverba>();

    useEffect(() => {
      try {
        api.get<CardContent>(`/projetos/${numeroDoProjeto}`)
          .then((response => { setProjeto(response.data) }));

        api.get<Coutverba>(`projetos/count/verba/${numeroDoProjeto}`)
          .then((response => { setValorConsumido(response.data) }));
  
        api.get<string>(`/files/${numeroDoProjeto}`).then((response => { setAta(response.data) }));
      } catch (err) {
        console.log(err);
      }
    },[numeroDoProjeto]);

    const downloadFile = () => {
      window.open(`http://localhost:6868/files/download/${numeroDoProjeto}`);
    }

    return (
      <DesktopModalContainer>
        <button id="fechar" onClick={() => fechar()}/>
        <ModalContainerInfos>
          <h1>{projeto ? projeto.projetoData.titulo : ""}</h1>
            <ContainerBox className='box'>
              <p>{projeto ? projeto.projetoData.numeroDoProjeto : ""} - {projeto ? projeto.projetoData.secao : "Seção ABC"}</p>
              <h3>{ata ? "ATA: " + ata.split(".")[0] : "Nenhuma ATA anexada."}</h3>
            </ContainerBox>
            <ContainerBox>
              <div>
                <h1>Data de início:</h1><h2>{projeto ? projeto.projetoData.data_de_inicio : "00/00/0000"}</h2>
              </div>
              <div>
                <h1>Data de finalização:</h1><h2>{projeto ? projeto.projetoData.data_de_termino : "00/00/0000"}</h2>
              </div>
            </ContainerBox>
            <ContainerBox>
              <Button text={'Dashboard'} tipo={"PopUpDashBoard"} rota={"dashboard"} numeroProjeto={projeto ? projeto.projetoData.numeroDoProjeto: 0}/>
              <label htmlFor="ata" onClick={downloadFile}>{ata ? ata.split(".")[0] : "não anexada*"}</label>
            </ContainerBox>
            <ContainerObjectives>
              <h1>Descrição:</h1>
              <h2>{projeto ? projeto.projetoData.descricao : ""}
              </h2>
            </ContainerObjectives>
          <CostCenters>
            <div className="tableHeader">
              <h2>Despesa (Desembolso)</h2>
              <h2>Valor</h2>
              <h2>Esforço</h2>
            </div>
            <ul className="scroller sc1">
              {projeto ? projeto.despesas.map(despesa => (
                <li>
                  <h2>{despesa.nome}</h2>
                  <h2>{despesa.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                  <h2>{despesa.esforco}</h2>
                </li>
              )) : ""}
            </ul>
          </CostCenters>
        </ModalContainerInfos>
        <ModalContainerGraphs>
          <ContainerValues>
            <div>
              <h1>Horas esperadas:</h1>
              <div>
                <AiOutlineClockCircle size={15} />
                <h2>{projeto ? projeto.valoresTotais.valorTotalEsforco : ""} Horas</h2>
              </div>
            </div>
            <div>
              <h1>Horas trabalhadas:</h1>
              <div>
                <AiOutlineClockCircle size={15} />
                <h2>{projeto ? projeto.projetoData.horas_apontadas : ""} Horas </h2>
              </div>
            </div>
          </ContainerValues>
          <HourGraphics>
            <GraphCircular valor={projeto ? projeto.projetoData.horas_apontadas : 0} total={projeto ? projeto.valoresTotais.valorTotalEsforco : 0} tipo={"%"} />
          </HourGraphics>
          <ContainerValues>
            <div>
              <h1>Valor do projeto:</h1><h2>{projeto ?
                analisaValor(projeto.valoresTotais.valorTotalDespesas) : ""}</h2>
            </div>
            <div>
              <h1>Valor consumido:</h1><h2>{analisaValor(Number(valorConsumido!?.total))}</h2>
            </div>
            <div>
              <h1>Saldo:</h1><h2>{analisaValor(projeto ? 
                projeto.valoresTotais.valorTotalDespesas - valorConsumido!?.total : 0)}</h2>
            </div>
          </ContainerValues>
          <Button text={'Detalhes'} tipo={'PopUp'} rota={"details"} numeroProjeto={projeto ? projeto.projetoData.numeroDoProjeto: 0}/>
        </ModalContainerGraphs>
      </DesktopModalContainer>
    );
}

export default PopUpCard;