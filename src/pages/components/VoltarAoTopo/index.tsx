import React from 'react';

import { Box } from './styles';

import { IoArrowUpCircleOutline } from 'react-icons/io5';

interface IProps {
    idRedirect: string;
}

const VoltarAoTopo: React.FC<IProps> = ({idRedirect}) => {
    return (
        <>
        <Box href={idRedirect}>
            <IoArrowUpCircleOutline size={60} />
        </Box>
        </>
    );
};

export default VoltarAoTopo;