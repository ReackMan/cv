import styled from "styled-components";

export const StyledCardHeader = styled.div<{ titleSize: string }>`
  width: 100%;
  img {
    width: 100%;
    height: 221px;
    border-radius: 20px 20px 0 0;
    margin: 0 0 27px 0;
    object-fit: cover;
  }
  
  h1 {
    
    margin: 0 25px 17px 15px;
    //font-size: ${props => props.titleSize};

    color: #000;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    line-height: 26px; /* 92.857% */
  }
  
`