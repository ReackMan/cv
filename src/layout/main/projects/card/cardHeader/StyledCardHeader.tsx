import styled from "styled-components";

export const StyledCardHeader = styled.div<{ titleSize: string }>`
  img {
    width: 318px;
    height: 221px;
    flex-shrink: 0;
    border-radius: 20px 20px 0 0;
    margin: 0 0 27px 0;
    object-fit: cover;
  }
  
  h1 {
    align-self: start;
    margin: 0 25px 17px 15px;
    font-size: ${props => props.titleSize};
    font-style: normal;

    color: #000;
    text-align: center;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    line-height: 26px; /* 92.857% */
  }

`