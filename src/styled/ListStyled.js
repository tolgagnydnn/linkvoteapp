import styled from "styled-components";


export const ListCardBox = styled.div`
    text-align:center;
    .toAddLink {
        width:325px;
        margin:10px auto;
        font-size: 1.5rem;
        font-weight: 600;
        color: rgb(72, 72, 72);
        text-align: center;
        border:solid 1px #ededed;
        border-radius:1rem;
        padding:10px 20px;
        margin-bottom: 1rem;
        display:flex;
        justify-content:space-around;
        align-items-center;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
        span {
            width:25px;
            height:25px;
            line-height:25px;
            background:rgb(255, 96, 0);
            color:#ffffff;
            text-align:center;
            border-radius:50%;
        
        }
    }
`

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
    padding-left: 1px;
    color: white;
    border: 0;
    outline: none;
    box-shadow: none;
    cursor:pointer;
    opacity:0;
    transition: opacity .5s ease;
`

export const ListCard = styled.div`
    padding: 0.5rem 1rem;
    border-radius:1rem;
    border:solid 1px #f2f2f2;
    transition: .5s ease;
    border-left-width: 3px;
    border-left-color:rgb(255, 96, 0);
    max-width:325px;
    margin:10px auto;
    display: grid;
    grid-template-columns:45px auto;
    align-items:center;
    grid-gap:2rem;
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
  font-size:1rem;
  background:rgb(255, 96, 0);
  color:#ffffff;
  text-align:center;
  line-height:12px;
  span {
      font-size:0.46rem;
      display:block;
  }
`

export const UpvoteButton = styled.div`
    cursor:pointer;
    width: 0; 
	height: 0;
	border-bottom: 8px solid rgb(167, 167, 167);
	border-left: 5px solid transparent; 
	border-right: 5px solid transparent; 
	margin-bottom: 5px;
    background: none;
    outline: 0;
    transition: border .5s ease;
    &:hover {
        border-bottom-color: rgb(123, 123, 123);
    }
`

export const DownvoteButton = styled(UpvoteButton)`
    border-bottom: 0;
    border-top: 8px solid rgb(167, 167, 167);;
    margin-bottom: 0;
    margin-top:5px;
    &:hover {
        border-top-color: rgb(123, 123, 123);
    }
`

export const ListDescription = styled.div`
    line-height:15px;
    text-align:left;
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

