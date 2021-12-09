import React from 'react'
//import Alert from '../components/Alert';
import {
    ModalBox,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton
} from '../styled/ModalStyled'

function Modal({onCancel, onConfirm}) {

    const cancelHandler = () => {
        onCancel();
    }

    const confirmHandler = () => {
        onConfirm();
    }

    return (
        <ModalBox>
            <ModalHeader> 
                <h1> Remove Link </h1>
            </ModalHeader>
            <ModalBody>
                <h2> Link Name </h2>
                <h3> Do you want to remove?</h3>
            </ModalBody>
            <ModalFooter>
                <ModalButton cancel onClick={cancelHandler}>CANCEL</ModalButton>
                <ModalButton onClick={confirmHandler}>OK</ModalButton>
            </ModalFooter>
        </ModalBox>
       
    )
}

export default Modal
