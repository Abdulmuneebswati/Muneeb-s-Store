import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import {mobile} from "../responsive";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
${mobile({padding:"10px"})}
  
  `;

const Title = styled.h1`

  font-weight: 300;
    text-align:center ;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color:${props => props.type === "filled"? "black":"transparent"};
    color:${props => props.type === "filled" && "white"};
`;

const Top = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content:space-between ;
`;

const TopTexts = styled.div`
${mobile({display:"none"})}

`;
const TopText = styled.span`
    text-decoration:underline ;
    cursor: pointer;
    margin: 0px 10px;
    
`;

const Bottom = styled.div`
    display: flex;
    justify-content:space-between ;
${mobile({flexDirection:"column"})}

`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}

`;

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column ;
    justify-content:space-around ;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;


const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
${mobile({margin:"5px 15px"})}

    `;
const ActualPrice = styled.div`
    font-size:30px ;
    font-weight: 300;
    ${mobile({marginBottom:"20px"})}

`;

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height: 1px;
`;
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px ;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content:space-between ;
    font-weight:${props=> props.type === "total" && "500"} ;
    font-size:${props=> props.type === "total" && "24px"} ;

`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color:black ;
    font-weight: 600;
    color:white ;
    /* margin-bottom: 10px; */
`;


const Cart = () => {
  return (
    <Container>
    <Announcements/>
      <Navbar/>

    <Wrapper>
        <Title>Your Bag</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type='filled'>Checkout Now</TopButton>

        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
                        <Details>
                            <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                            <ProductId><b>ID:</b> 652738271878</ProductId>
                            <ProductColor color = "black"/>
                            <ProductSize><b>Size:</b> Medium</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <AmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </AmountContainer>
                        <ActualPrice>1,200 RS</ActualPrice>
                    </PriceDetail>
                </Product> 
                <Hr />
                <Product>
                    <ProductDetail>
                        <Image src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400"></Image>
                        <Details>
                            <ProductName><b>Product:</b> THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b> 97891234</ProductId>
                            <ProductColor color = "black"/>
                            <ProductSize><b>Size:</b> 10</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <AmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </AmountContainer>
                        <ActualPrice>2,500 RS</ActualPrice>
                    </PriceDetail>
                </Product>
            </Info>
        <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>3,700 RS</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>500 RS</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-500 RS</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemPrice>3,700 RS</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
        </Summary>
        </Bottom>
    </Wrapper>

      <Footer />
    </Container>
  )
}

export default Cart
