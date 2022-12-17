import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {mobile , tablet} from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column ;
  padding: 20px;
`;
const Logo = styled.h1`


`;

const Description = styled.p`
    margin: 20px 0px;

`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color:${(props)=> props.color} ;
    border-radius: 50%;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:2px ;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
${mobile({display:"none"})}
${tablet({padding:"10px"})}

`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none ;
    display: flex;
    flex-wrap: wrap;
    ${tablet({alignItems:"space-around"})}

`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width:50%;
    height: 30px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Muneeb's Store</Logo>
        <Description>
          Allows people to buy and sell physical goods, services, and digital
          products over the internet rather than at a brick-and-mortar location.
        </Description>
        <SocialContainer>
            <SocialIcon color="#3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="#E4405F">
            <Instagram />
            </SocialIcon>
            <SocialIcon color="#55ACEE">
            <Twitter/>
            </SocialIcon>
            <SocialIcon color="#E60023">
            <Pinterest/>
            </SocialIcon>

        </SocialContainer>
      </Left>


      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Terms</ListItem>

        </List>
      </Center>
      
      
      
      <Right>
      <Title>Contact</Title>
        <ContactItem>
                <Room style={{marginRight:"10px"}}/>      Jinnah Avenue, F-8, Islamabad, Pakistan.
</ContactItem>
<ContactItem>
        <Phone style={{marginRight:"10px"}}/> +92 3180802727
</ContactItem>
<ContactItem>
    <MailOutline style={{marginRight:"10px"}}/>
        contact@muneeb.dev
</ContactItem>
    <Payment src="/images/payments2.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
