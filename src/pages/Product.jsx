import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import { Add, Remove } from "@mui/icons-material";
import {mobile,tablet} from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
${mobile({padding:"10px",flexDirection:"column"})}
${tablet({padding:"30px"})}

`;

const ImgContainer = styled.div`
    flex:1 ;
`;

const Image = styled.img`
    height: 90vh;
    width:100% ;
    object-fit:cover ;
${mobile({height:"40vh"})}
${tablet({height:"70vh",width:"90vh"})}

`;

const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding:"10px"})}
    ${tablet({padding:"20px"})}

`;

const Title = styled.h1`
    font-weight: 200;
    ${tablet({fontWeight: "100"})}

`;

const Description = styled.p`

    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 50;
    font-size:40px ;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between ;
    width: 50%;
    margin: 30px 0px;
${mobile({width:"100%"})}

    `;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size:20px ;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50px ;
    background-color: ${props => props.color} ;
    margin: 0px 5px;
    cursor: pointer;
`;

const Select = styled.select`
    margin-left: 10px;
    padding: 5px;
`;


const Option = styled.option``;

const AddContainer= styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content:space-between ;
${mobile({width:"100%"})}

`;

const AmountContainer = styled.div`

    display: flex;
    align-items: center;
    font-weight: 700;

`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px ;
    border:1px solid teal ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border:2px solid teal ;
    background-color: white;
    cursor:pointer ;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;




const Product = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Shirt</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
            eaque? Hic nisi laboriosam id ipsam dolorem. Asperiores, ab dicta,
            corrupti debitis itaque autem delectus suscipit libero reiciendis
            doloribus eos vitae?
          </Description>
          <Price>500 RS</Price>
          <FilterContainer>
            <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor  color="black"/><FilterColor color="darkblue"/> <FilterColor color="gray"/>
            

            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
            <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option> 
            </Select>


            </Filter>

          </FilterContainer>

            <AddContainer>

                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>

                <Button>Add to cart</Button>
            </AddContainer>


        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
