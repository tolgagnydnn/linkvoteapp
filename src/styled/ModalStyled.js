import styled from "styled-components";

export const ModalBox = styled.div`
    background:#fff;
    border-radius:1rem;
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 20px 45px 0 rgb(0 0 0 / 10%);
    min-width:350px;
`

export const ModalHeader = styled.div`
    padding:10px 20px;
    border-bottom:solid 1px #ededed;
    h1 {
        font-size: 0.800rem;
        font-weight: 600;
        color: rgb(72, 72, 72);
        text-align: center;
    }
`

export const ModalBody = styled.div`
    padding:1rem;
    margin-top:10px;
    h2 {
        font-size: 1.3rem;
        font-weight: 600;
        color: rgb(72, 72, 72);
        text-align: center;
        margin-bottom:0.5rem;
    }
    h3 {
        font-size: 0.760rem;
        font-weight: 600;
        color: rgb(72, 72, 72);
        text-align: center;
    }
`

export const ModalFooter = styled.div`
    padding:1rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
export const ModalButton = styled.button`
    width:100px;
    cursor:pointer;
    font-size:0.875rem;
    border:none;
    outline:none;
    box-shadow:none;
    padding:7px 15px;
    border-radius:0.4rem;
    color:#fff;
    background:${props => props.cancel ? "#f64e60" : "#1bc5bd" }
`

export const ModalCloseButton = styled.button`
   position: absolute;
    top: -8px;
    right: -2px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    background: rgb(255, 96, 0);
    padding-left: 1px;
    color: white;
    border: 0;
    outline: none;
    box-shadow: none;
    cursor:pointer;
`