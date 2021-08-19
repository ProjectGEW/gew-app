import React from "react";
import { useTransition } from "react-spring";

import Toast from "./Toast";

import { ToastMessage } from "../../../context/Toast";

import { Container } from './styles';

interface ToastContainerProps {
    message: ToastMessage[];
}


const ToastContainer: React.FC<ToastContainerProps> = ({ message }) => {
  /*  const messageWithTransitions = useTransition(
        message,
        message => message.id,
        {
            from: { right: '-120%', opacity: 0},
            enter: { right: '0%', opacity: 1},
            leave: { right: '-120%', opacity: 0},
        }
    );*/

    /*

    <Container>
        {messageWithTransitions.map(({ item, key, props }) =>
            <Toast key={key} style={props} message={item}/>
        )}
    </Container>

        */

    return (
        <h1>a</h1>
    );
};

export default ToastContainer;