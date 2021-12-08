import React from 'react';

import { Box } from './styles';

import { IoArrowUpCircleOutline } from 'react-icons/io5';

const VoltarAoTopo: React.FC = () => {
    if (window.innerWidth > 1199) {
        var buttonUp = document.getElementById('topo');
  
      window.addEventListener('scroll', function() {
        if (Math.round(window.pageYOffset) >= 100) {
            document.getElementById('topo')!.style.opacity = '1';

            setTimeout(()=> {
                document.getElementById('topo')!.style.display = 'block';
            }, 600, buttonUp);
        } else {
            document.getElementById('topo')!.style.opacity = '0';

            setTimeout(()=> {
                document.getElementById('topo')!.style.display = 'none';
            }, 600, buttonUp);
        }
      });
    }

    function voltar() {
        let s = document.body.scrollTop || window.pageYOffset;
        let t = setInterval(function() {
            if(s > 0) {
                window.scroll(0, s -= 200)
            } else {
                clearInterval(t)  
            }
        }, 20);
    }

    return (
        <>
        <Box id="topo" onClick={voltar}>
            <IoArrowUpCircleOutline size={75} />
        </Box>
        </>
    );
};

export default VoltarAoTopo;