import styled from "styled-components";

export const ListFormHead = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(72, 72, 72);
    text-align: center;
    margin-bottom: 1rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    .previouspage {
        width:35px;
        height:35px;
        line-height:35px;
        color: rgb(255, 96, 0);
        border: solid 1px #ededed;
        border-radius:50%;
        margin-right:1rem;
        transition: all .5s ease;
        cursor:pointer;
        margin-right:4rem;
        &:hover {
            background:rgb(255, 96, 0);
            color:#ffffff;
            border-color:transparent;
        }
    }
`

export const ListFormBox = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
`


export const ListForm = styled.form`
    padding:2rem;
    border:solid 1px #e5e5e5;
    border-radius: 1rem;
`

export const ListFormGroup = styled.div`
    margin-bottom: 1rem;
`

export const ListFormLabel = styled.label`
    font-weight: 600;
    font-size:0.785rem;
    color: rgb(72, 72, 72);
`


export const ListFormInput = styled.input`
    background:#f2f2f2;
    border:0;
    height: 55px;
    font-size: 0.765rem;
    display: block;
    width: 100%;
    color: rgb(72, 72, 72);
    padding-left: 1rem;
    margin-top:0.5rem;
    border-radius:0.4rem;
    &:focus {
        background:none;
        border:0;
        border-color: rgb(255, 96, 0);
    }
`
export const ListButtonBox = styled.div`
    text-align:center;
`
export const ListFormButton = styled.button`
    background: none;
    font-size:0.865rem;
    outline: none;
    border:solid 1px #e5e5e5;
    color: rgb(72, 72, 72);
    padding:12px 30px;
    border-radius:0.4rem;
    width: 100%;
    margin-top: 10px;
    cursor:pointer;
    transition: all .5s ease;
    font-weight: 600;
    width: 100%;
    &:hover {
        background: rgb(255, 96, 0);
        color:#ffffff;
        border-color:transparent;
    }
`