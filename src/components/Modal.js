import React from 'react'
import {
    ModalBox,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton
} from '../styled/ModalStyled'

function Modal() {
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
                <ModalButton cancel>CANCEL</ModalButton>
                <ModalButton>OK</ModalButton>
            </ModalFooter>
        </ModalBox>
    )
}

export default Modal
