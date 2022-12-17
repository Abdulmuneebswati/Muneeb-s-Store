import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=940')  center ;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`

    padding: 20px;
    width: 40%;
    background-color:white ;
${mobile({width:"75%",padding:"10px"})}

`;

const Title = styled.h1`
    font-size:24px ;
    font-weight: 300;

`;
const Form = styled.form`
    display: flex;
    flex-wrap:wrap ;
`;




const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px ;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 10px;
`;

const Button = styled.button`
    width: 40%;
    border:none ;
    padding: 15px 20px;
    background-color:teal ;
    color:white ;
    cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
