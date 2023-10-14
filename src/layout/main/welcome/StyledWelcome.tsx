import styled from "styled-components";



export const StyledWelcome = styled.section<{ ref: any }>`
  display: flex;

  padding-right: 19px;
  padding-top: 10px;
  justify-content: space-between;
  align-items: center;
  //gap: 100px;

  height: 350px;
  

  
  p {
    margin: 0;
    padding: 0;
  }
`
export const WelcomeText = styled.text`
  display: block;
  //flex-basis: 696px;
  min-width: 494px;
  
  color: var(--Solid-Heading, #42446E);
  font-family: Poppins,sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
  
  text-align: left;
  
  h1 {
    font-size: 58px;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
`
export const WelcomeName = styled.text`
  
  flex-basis: 696px;
  
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
export const WelcomeImg = styled.img<{ ref: any }>`
  object-fit: cover;
  
`