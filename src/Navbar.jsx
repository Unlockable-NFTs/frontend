import React from 'react'
import styled from 'styled-components'
import { BiHome } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { BsChatRightText } from 'react-icons/bs'
import { BsCashCoin } from 'react-icons/bs'
import Fade from 'react-reveal/Fade';
const Navbar = () => {
    return (
        <Container>
            <Box>

            </Box>
            <Nav>
                <Text>
                    <Fade left>
                        <h1>UnLockale NFTs</h1>
                    </Fade>
                    <Fade right>
                        <p>Own the assest behind Nft.</p>
                    </Fade>
                </Text>
                <Middle>
                    <li><a href="#"><BiHome /></a></li>
                    <li><a href="#"><FiUser /></a></li>
                    <li><a href="#"><BsCashCoin /></a></li>
                    <li><a href="#"><BsChatRightText /></a></li>
                </Middle>
                <Right>
                    <button>Connect Wallet</button>
                </Right>
            </Nav>
        </Container>
    )
}

export default Navbar
const Box = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
background: #00000061;
height: 32.5vw;
`
const Text = styled.div`
  color:white;
  z-index: 999;
  text-align:center;
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  h1{
    font-family: 'Poppins', sans-serif;
    font-size:30px;
    font-weight:600;
  }
  P{
    font-weight: 300;
    font-size:14px;
  }
`
const Nav = styled.div`
display:flex;
justify-content:center;
width:83%;
align-items:flex-start;
margin:20px auto;
`
const Middle = styled.div`
display:flex;
justify-content:center;
z-index: 999;
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

const Container = styled.div`
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
  position:fixed;
  justify-content:center;
  align-items:center;
  top:2rem;
  left:5rem;
  button{
    background: transparent;
    border: 1px solid #ffffff87;
    padding: 9px 20px;
    border-radius: 5px;
    color: #ffffff;
    font-size: 13px;
    transition: 0.3s;
    cursor:pointer;
    :hover{
        background:#21d4d0;
        border:1px solid #21d4d0;
        color:black;
    }
  }
`