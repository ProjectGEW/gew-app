import React from 'react';
import Modal from '../CardPopUp/Modal';
//import Button from '../Button';
//import api from '../../../service/api'

import { Container, PopUp, Title, Graph, Scroll, Bar, Value } from './styles';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

interface GraphBarProps {
    valor: number;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {

    if (!isModalVisible) {
        return null
    }
    
    return (
        <Modal onBackdropClick={onBackdropClick}>
            <Container>
                <PopUp>
                    <Title>
                        <h1>PROJETOS</h1>
                        <span onClick={onBackdropClick} />
                    </Title>
                    <Scroll>
                        <div className="projeto">
                            <p>NOMEPROJETO 1</p>
                            <p>R$ 10.312,21</p>
                            <p>25%</p>
                        </div>
                        <div className="projeto">
                            <p>NOMEPROJETO 2 </p>
                            <p>R$ 2.612,21</p>
                            <p>10%</p>
                        </div>
                        <div className="projeto">
                            <p>NOMEPROJETO 3</p>
                            <p>R$ 40.762,21</p>
                            <p>11%</p>
                        </div>
                        <div className="projeto">
                            <p>NOMEPROJETO 4</p>
                            <p>R$ 4.243,21</p>
                            <p>43%</p>
                        </div>
                        <div className="projeto">
                            <p>NOMEPROJETO 5</p>
                            <p>R$ 20.235,21</p>
                            <p>12%</p>
                        </div>
                        <div className="projeto">
                            <p>NOMEPROJETO 6</p>
                            <p>R$ 50.212,21</p>
                            <p>12%</p>
                        </div>
                        <div className="projeto">
                            <p>NOMEPROJETO 7</p>
                            <p>R$ 42.856,21</p>
                            <p>16%</p>
                        </div>
                    </Scroll>
                    <Graph>
                        <Bar>
                            <Value valor={47}></Value>
                        </Bar>
                    </Graph>
                </PopUp>
            </Container>
        </Modal>
    );
}

export default BaseModalWrapper;