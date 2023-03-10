import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar';
import Announcements from '../Components/Announcements'
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
// import {mobile} from "../responsive";

const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
    
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between ;
`;
const Filter= styled.div`
    margin: 20px;

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
    <Announcements />
      <Navbar/>
      <Title>Dresses</Title>

        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
            <Option selected disabled>Color</Option>

                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>

            </Select>
            <Select>
            <Option selected disabled>Size</Option>

                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>

            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
            <Option selected disabled>Newest</Option>

                <Option>price (asc)</Option>
                <Option>price (desc)</Option>
                

            </Select>
            
            </Filter>

        </FilterContainer>
        <Products />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
