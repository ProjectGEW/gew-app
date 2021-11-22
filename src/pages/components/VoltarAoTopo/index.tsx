import React from 'react';

import { Box } from './styles';

import { FaArrowCircleUp } from 'react-icons/fa';

interface IProps {
    idRedirect: string;
}

const VoltarAoTopo: React.FC<IProps> = ({idRedirect}) => {
    return (
        <>
        <Box href={idRedirect}>
            <FaArrowCircleUp size={40} />
        </Box>
        </>
    );
};

export default VoltarAoTopo;