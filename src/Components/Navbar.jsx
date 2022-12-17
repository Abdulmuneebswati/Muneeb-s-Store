import { Search,ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile , tablet} from "../responsive";
const Container = styled.div`
height:60px;
${mobile({height:"50px"})}
${tablet({height:"80px"})}

`;
const Wrapper = styled.div`
        padding:10px 20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
${mobile({padding:"10px 0px"})}
${tablet({padding:"10px 0px"})}
`
const Left = styled.div` display:flex;flex:1; align-items:center;
${tablet({alignItems:"flex-start"})}

`
const Center = styled.div`flex:1;text-align:center`
const Right = styled.div`
flex:1;
display:flex;
 align-items:center;
  justify-content:flex-end;
${mobile({flex:"2",justifyContent: "center"})}
${tablet({flex:"2",justifyContent:"center"})}

  `
const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
${mobile({display:"none"})}
    
`
const Searchcontainer = styled.div`
border:0.5px solid lightgray;
align-items:center;
display:flex;
margin-left:25px;
padding:5px;
${tablet({marginLeft:"10px"})}

`
const Input = styled.input`
   border:none;
${mobile({width:"50px"})}
${tablet({width:"75px"})}

`
const Logo = styled.h1`
  font-weight:bold ;
${mobile({fontSize:"14px"})}
${tablet({fontSize:"18px"})}

`
const Menuitems = styled.div`
    font-size:15px;
    cursor:pointer;
    margin-left:25px;
${mobile({fontSize:"10px",marginLeft:"7px"})}
${tablet({marginLeft:"15px"})}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Language>EN</Language>
        <Searchcontainer>
            <Input placeholder='search'/>
            <Search style={{color:"gray",fontSize:"16px"}}/>
        </Searchcontainer>
        </Left>
        <Center><Logo>Muneeb's Store</Logo></Center>
        <Right>
        <Link to="/register"><Menuitems>Register</Menuitems></Link>
        <Link to="/login"><Menuitems>SignIn</Menuitems></Link>
        <Menuitems>
        <Badge badgeContent={4} color="primary">
  <Link to="/cart"> <ShoppingCartOutlined/></Link>
</Badge>
</Menuitems>

        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar
