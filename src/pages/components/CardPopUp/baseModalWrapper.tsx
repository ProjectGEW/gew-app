import React from 'react';
import Modal from './Modal';
import { DesktopModalContainer, ModalContainerGraphs, ModalContainerInfos,
        ContainerBox } from './ModalPopup.styles';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if (!isModalVisible) {
        return null
    }
    return (<Modal onBackdropClick={onBackdropClick} >
                <DesktopModalContainer>
                    <button onClick={onBackdropClick} />
                    <ModalContainerInfos>
                        <span>WEC - IMPLANTAÇÃO DE EDI CLIENTE XYZ</span>
                        <ContainerBox></ContainerBox>
                        <ContainerBox></ContainerBox>
                        <ContainerBox></ContainerBox>
                    </ModalContainerInfos>
                    <ModalContainerGraphs></ModalContainerGraphs>
                </DesktopModalContainer>
            </Modal>
        );
}

export default BaseModalWrapper;