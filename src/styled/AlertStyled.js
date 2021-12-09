import styled from "styled-components";


export const AlertBox = styled.div`
    border-radius:0.4rem;
    position:fixed;
    top:5%;
    right:3%;
    box-shadow: 0 20px 45px 0 rgb(0 0 0 / 7%);
    min-width:175px;
    z-index:99;
    border-left: solid 5px;
    border-left-color: green;
    padding:15px 30px;
    background: ${props => props.success ? "#000" : "#ddd"};
    p {
        font-size: 0.800rem;
        font-weight: 600;
        color: rgb(72, 72, 72);
        text-align: center;
    }
`