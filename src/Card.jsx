import React from 'react'
import styled from 'styled-components';
import { TbDownload } from 'react-icons/tb'
const Card = (prop) => {
  return (
      <Wrap>
        <Img>
          <img src={prop.image} alt="" />
          <button><TbDownload /></button>
        </Img>
      </Wrap>
  )
}

export default Card;

const Wrap = styled.div`
width:20vw;
`
const Img = styled.div`
img{
    width:100%;
}
button{
  display: block;
  padding: 6px 15px;
  margin: 0 12px;
  background:transparent;
  border:none;
  cursor:pointer;
  font-size:23px;
  background:#8080805c;
  border-radius:3px;
  transform: translateY(-4rem);
  visibility: hidden;
  opacity:0;
  svg{
    color:white;
    font-weight:600;
  }
  :hover{
      svg{
        color:#359c9edb;
      }
  }
}
:hover{
  transition:0.3s;
  button{
    opacity:1;
    visibility: visible;
  }
}
`

const Container = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:0.4rem;
`