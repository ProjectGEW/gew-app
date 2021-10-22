import React from "react";

import { Card, CardStatus, CardBox } from './styles';

const CardProject: React.FC = () => {

  return (
    <>
      <Card>
        <CardStatus/>
        <CardBox/>
      </Card>
    </>
  );
}

export default CardProject;