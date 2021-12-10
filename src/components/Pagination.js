import {useState} from 'react'
import {PaginationBox, PaginationNav, PaginationNumber} from '../styled/PaginationStyled'

function Pagination() {

    const [currentButton, setCurrentButton] = useState(1);

    const pages = 5;
    const listNumbers = [];
 
    for (let i =1; i <= pages; i++) {
        listNumbers.push(i);
    }

 
    return (
        <PaginationBox>
            <PaginationNav>
                <PaginationNumber onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>&laquo;</PaginationNumber>
                    {
                        listNumbers.map((number ,index) => (
                            <PaginationNumber key={index} onClick={() => setCurrentButton(number)}> {number} </PaginationNumber>
                        ))
                    }
                <PaginationNumber onClick={() => setCurrentButton((prev) => prev === listNumbers.length ? prev : prev + 1)}>&raquo;</PaginationNumber>           
            </PaginationNav>
        </PaginationBox>
    )
}

export default Pagination
