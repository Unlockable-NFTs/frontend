import React from 'react'
import styled from 'styled-components'
import {BiHome} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {BsChatRightText} from 'react-icons/bs'
import {BsCashCoin} from 'react-icons/bs'
const Navbar = () => {
    return (
        <Container>
            <Nav>
                <Left>
                    <h1>Unlockable-NFT</h1>
                </Left>
                <Middle>
                    <li><a href="#"><BiHome/></a></li>
                    <li><a href="#"><FiUser/></a></li>
                    <li><a href="#"><BsCashCoin/></a></li>
                    <li><a href="#"><BsChatRightText/></a></li>
                </Middle>
                <Right>
                    <button>Connect Wallet</button>
                </Right>
            </Nav>
        </Container>
    )
}

export default Navbar

const Nav = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:83%;
margin:auto;
`
const Middle=styled.div`
display:flex;
justify-content:center;
align-items:center;
    padding: 17px 40px;
    gap: 2rem;
    background:red;
    border-radius:20px;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
li a{
    color:black;
    font-size:20px;
    display: flex;
    align-items: center;
    svg{
        color:white;
    }
}
`
const Left = styled.div`
h1{
    font-size:22px;
}
`
const Container=styled.div`
width: 100%;
height:500px;
background:url('./images/banner.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
box-shadow:0 0 10px #0000005c;
align-items: center;
`



const Right = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  button{
    background:transparent;
    border:1px solid black;
    padding:5px 20px;
    border-radius:5px;
    font-size:13px;
    transition: 0.3s;
    :hover{
        background:#21d4d0;
        border:1px solid #21d4d0;
        color:white;
    }
  }
`