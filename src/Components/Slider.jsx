import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data";
import {mobile,tablet} from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative; 
  overflow: hidden;
${mobile({display:"none"})}

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center; 
  background-color: ${(props) => props.backgroundColor};
`;

const ImgContainer = styled.div`
  height: 100%;
  padding-top:100px;
  padding-left:40px;
  flex: 1;
${tablet({paddingLeft:"20px"})}

`;

const Image = styled.img`
  height: 80%;
${tablet({width:"100%"})}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
${tablet({padding:"10px"})}

`;
const Title = styled.h1`
font-size:70px;
${tablet({fontSize:"30px"})}

`;
const Desc = styled.p`
  margin:50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
${tablet({margin:"10px 0px"})}

`;
const Button = styled.button`
  padding:10px;
  background-color:transparent;
  cursor:pointer;
  font-size: 20px;
`;

const Slider = () => {
  let [slideIndex,setSlideIndex] = useState(0);
  
  const handleClick = (direction)=>{

    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0);
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map(item =>(
        <Slide backgroundColor={item.bg} key={item.id}>
        <ImgContainer> <Image src={item.img}/> </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOW NOW</Button>

        </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
