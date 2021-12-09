import React from 'react'
import {PaginationBox, PaginationNav, PagiinationNumber} from '../styled/PaginationStyled'

function Pagination() {
    return (
        <PaginationBox>
            <PaginationNav>
                <PagiinationNumber>&laquo;</PagiinationNumber>
                <PagiinationNumber>1</PagiinationNumber>
                <PagiinationNumber>2</PagiinationNumber>
                <PagiinationNumber>3</PagiinationNumber>
                <PagiinationNumber>4</PagiinationNumber>
                <PagiinationNumber>5</PagiinationNumber>
                <PagiinationNumber>&raquo;</PagiinationNumber>
            </PaginationNav>
        </PaginationBox>
    )
}

export default Pagination
