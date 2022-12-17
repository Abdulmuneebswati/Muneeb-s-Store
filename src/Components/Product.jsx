import styled from 'styled-components'
import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.2) ;
    z-index:3;
    display: flex;
    align-items:center ;
    justify-content: center ;
`;
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height: 350px;
    display:flex;
    justify-content: center;
    align-items:center ;
    background-color: #f5fbfd;
    position:relative ;
    &:hover ${Info}{
      opacity:1;
    }
    cursor: pointer;
`;
const Circle = styled.div`
    width: 200px;
    border-radius:50% ;
    height: 200px;
    background-color: white;
    position:absolute ;
`;
const Image = styled.img`
    height: 75%;
    z-index:2
`;
const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius:50% ;
    background-color:white ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    &:hover{
      background-color: #e9f5f5;
      transform:scale(1.1) ;
    }
`;

const Product = (props) => {
  return (
    <Container>
      <Circle/>
      <Image src={props.item.img}/>
      <Info>
        <Icon>
        <ShoppingCartOutlined/>
        </Icon>
        <Icon>
        <SearchOutlined/>
        </Icon>
        <Icon>
        <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
