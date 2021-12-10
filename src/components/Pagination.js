import React from 'react'
import {PaginationBox, PaginationNav, PaginationNumber} from '../styled/PaginationStyled'

function Pagination({listPerPage, totalList, paginate}) {

    const listNumbers = [];
 
    for (let i =1; i <= Math.ceil(totalList / listPerPage); i++) {
        listNumbers.push(i);
    }

 
    return (
        <PaginationBox>
            <PaginationNav>
                <PaginationNumber>&laquo;</PaginationNumber>
                    {
                        listNumbers.map((number) => (
                            <PaginationNumber onClick={() => paginate(number)} key={number}> {number} </PaginationNumber>
                        ))
                    }
                <PaginationNumber>&raquo;</PaginationNumber>           
            </PaginationNav>
        </PaginationBox>
    )
}

export default Pagination
