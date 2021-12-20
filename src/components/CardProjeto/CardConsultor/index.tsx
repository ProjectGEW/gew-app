import React from "react";
import { PopupModal } from "../../../styles/global";
import PopupVerbaUtilizada from "../../DashboardPopUp/verbaUtilizada";
import { Card, CardStatus, CardBox } from './styles';

const CardConsultor: React.FC = () => {

  return(
    <>
      <PopupModal closeOnEscape trigger={
        <Card>
          <CardStatus />
          <CardBox />
        </Card>
      } modal>
        {(close: any) => (
          <PopupVerbaUtilizada fechar={close} status={'EM_ANDAMENTO'} valor={Math.round(0)} />
        )}
      </PopupModal>
    </>
  );
}

export default CardConsultor;