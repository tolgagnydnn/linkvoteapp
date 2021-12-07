import styled from "styled-components";


export const ListCardClose = styled.div`
    position: absolute;
    top: -8px;
    right: -2px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    background: rgb(255, 96, 0);
    color: white;
    border: 0;
    outline: none;
    box-shadow: none;
    cursor:pointer;
    opacity:0;
    transition: opacity .5s ease;
`

export const ListCard = styled.div`
    padding: 0rem 1rem;
    border-radius:1rem;
    border:solid 1px #f2f2f2;
    transition: .5s ease;
    border-left-width: 3px;
    border-left-color:rgb(255, 96, 0);
    max-width:300px;
    margin:10px auto;
    display: grid;
    grid-template-columns:45px auto;
    align-items:center;
    grid-gap:1.8rem;
    position:relative;
    &:hover ${ListCardClose} {
        opacity:1;
    }
    &:hover {
        box-shadow: 0 4px 11px 0 rgba(82, 71, 71, 0.13);
    }
`

export const ListPointBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
`

export const ListPoint = styled.div`
  width:40px;
  height:40px;
  border-radius:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-weight:600;
  font-size:0.90rem;
  background:rgb(255, 96, 0);
  color:#ffffff;
  text-align:center;
  line-height:12px;
  span {
      font-size:0.42rem;
      display:block;
  }
`

export const ListPointButton = styled.div`
    cursor:pointer;
    color:${props => props.upvote ? "green" : "red"}
`

export const ListDescription = styled.div`
    line-height:15px;
`

export const ListTitle = styled.h1`
  font-size:0.86rem;
  font-weight:600;
  color: rgb(72, 72, 72);
`
export const ListLink = styled.a`
    text-decoration:none;
    font-size:0.50rem;
    font-weight:600;
    color: rgb(72, 72, 72);
    cursor:pointer;
    transition: color .5s ease;
    &:hover {
        color:rgb(255, 96, 0);
    }
`

