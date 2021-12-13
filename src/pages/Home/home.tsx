import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import HomeGerente from '../Menu';
import HomeGestor from '../Gestor';
import HomeFornecedor from '../Fornecedor';
import HomeConsultor from '../Consultor';

const Home: React.FC = () => {
  const [cargo] = useState(() => {
    let recebeCargo = localStorage.getItem('Cargo');
    
    if (recebeCargo) {
      let objetoCargo = recebeCargo;
      return objetoCargo;
    }
  });

  const history = useHistory();

  if(cargo === 'GZ4_7WPQgajvmSlKlRgn8A') {
    return (
      <HomeGerente/>
    );  
  } else if(cargo === 'fmb8xNYF02BPXsGJohcOkw') {
    return (
      <HomeGestor/>
    );  
  } else if(cargo === 'aIj5vqAY-nXFQC0DLJUrxA') {
    return (
      <HomeFornecedor/>
    );  
  } else if(cargo === 'V_mJKGFmvh7XtkEVhOCgTw') {
    return (
      <HomeConsultor/>
    );  
  } else {
    history.push('/');
    return (
      <h1>Not found</h1>
    );
  }

}

export default Home;