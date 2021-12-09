import styled from "styled-components";


export const PaginationBox = styled.div`
    width:100%;
    display:block;
`

export const PaginationNav = styled.ul`
    margin: 2em auto;
    padding-left: 0;
    list-style-type: none;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const PagiinationNumber = styled.li`
    margin:0.15rem;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    border:solid 1px #ddd;
    border-radius:50%;
    font-size:0.865rem; 
    padding: 0.125em;
    cursor:pointer;
    transition:all .3s ease;
    &:hover {
        background:rgb(255, 96, 0);
        color:#ffffff;
        border-color:#fff;
        box-shadow: 0 4px 11px 0 rgb(82 71 71 / 30%);
        
    }
    .active {
        background:rgb(255, 96, 0);
        color:#ffffff;
        border-color:#fff;
        box-shadow: 0 4px 11px 0 rgb(82 71 71 / 30%);
    }
`