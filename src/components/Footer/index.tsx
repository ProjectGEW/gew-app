import React from "react";

import { FooterForm } from "./style";

interface footerProps {
  tipo?: string;
}

const Footer: React.FC<footerProps> = ({tipo}) => {
  return (
    <>
      <FooterForm tipo={tipo}> 
        <div className='item1'></div>
        <div className='item2'></div>
        <div className='item3'></div>
        <div className='item4'></div>
      </FooterForm>
    </>
  );
};

export default Footer;