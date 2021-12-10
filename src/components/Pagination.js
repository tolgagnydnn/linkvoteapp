import React from 'react'
import {PaginationBox, PaginationNav, PagiinationNumber} from '../styled/PaginationStyled'

function Pagination({listPerPage, totalList, paginate }) {

    const listNumbers = [];
 
    for (let i =1; i <= Math.ceil(totalList / listPerPage); i++) {
        listNumbers.push(i);
    }

    return (
        <PaginationBox>
            <PaginationNav>
                <PagiinationNumber>&laquo;</PagiinationNumber>
                    {
                        listNumbers.map((number) => (
                            <PagiinationNumber onClick={() => paginate(number)} key={number}>{number}</PagiinationNumber>
                        ))
                    }
                <PagiinationNumber>&raquo;</PagiinationNumber>           
            </PaginationNav>
        </PaginationBox>
    )
}

export default Pagination
