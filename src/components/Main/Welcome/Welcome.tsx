import React from "react";
import styled from "styled-components";
import avatar from '../../../assets/images/avatar.png'

const Welcome = () => {
    return (
        <StyledWelcome>
            <WelcomeText>
                Hi 👋,
                My name is
                <WelcomeName> Artem DM </WelcomeName>
                I build things for web
            </WelcomeText>
            <WelcomeImg src={avatar}/>
        </StyledWelcome>
    )
}

const StyledWelcome = styled.div`
  display: flex;

  padding: 19px 10px 0 0;
  align-items: center;
  gap: 198px;

  height: 350px;

  margin: 0 49px 200px 38px;
`

const WelcomeText = styled.text`
  
  flex-basis: 636px;
  
  color: var(--Solid-Heading, #42446E);
  font-family: Poppins,sans-serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
  
  text-align: left;
`
const WelcomeName = styled.text`
  
  flex-basis: 636px;
  
  color: var(--Solid-Heading, #42446E);
  font-family: Poppins,sans-serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;

  background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const WelcomeImg = styled.img`

`

export default Welcome