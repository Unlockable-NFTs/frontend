import React from 'react'
import styled from 'styled-components'
import {BsChevronDown} from 'react-icons/bs'
const Explore = () => {
  return (
    <Component>
        <h3>Explore More</h3>
        <BsChevronDown/>
    </Component>
  )
}

export default Explore

const Component=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:0.5rem;
padding:20px 0;
animation: animateDown infinite 1.5s;

h3{
    color:white;
    font-family: 'Poppins', sans-serif;
    font-size:26px;
}
svg{
    color:white;
}
`