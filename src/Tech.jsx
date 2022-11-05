import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Data from './Data'
const Tech = () => {
  return (
    <Wrap>
     {Data.map((val)=>{
        return(
            <Card key={val.id} image={val.img}/>
        )
     })}
    </Wrap>
  )
}

export default Tech
 const Wrap=styled.div`
 display:flex;
 justify-content:center;
 flex-wrap:wrap;
 gap:2rem;
`