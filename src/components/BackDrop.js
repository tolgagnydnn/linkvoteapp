import React from 'react'
import {BackDropBox} from '../styled/ModalStyled';


function BackDrop({onCancel}) {
    return (
        <BackDropBox onClick={onCancel}> </BackDropBox>
    )
}

export default BackDrop
