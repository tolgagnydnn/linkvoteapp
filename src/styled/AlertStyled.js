import styled from "styled-components";


export const AlertBox = styled.div`
    background:#fff;
    border-radius:1rem;
    position:fixed;
    top:10%;
    right:10%;
    box-shadow: 0 20px 45px 0 rgb(0 0 0 / 10%);
    min-width:350px;
    z-index:99;
    border-left: solid 5px;
    p {
        font-size: 0.800rem;
        font-weight: 600;
        color: rgb(72, 72, 72);
        text-align: center;
    }
`