import styled from "styled-components";

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;


  h2 {
    color: var(--Solid-Heading, #42446E);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 54.167% */

    margin: 0 0 49px 0;
  }

  h3 {
    color: var(--dark-content, #666);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 81.25% */

    margin: 0 0 110px 0;
  }

`
export const StyledCards = styled.div`
  display: flex;
  gap: 62px 22px;
  
  flex-wrap: wrap;
  justify-content: space-between;


  padding-bottom: 62px;

  &:last-child {
    padding-bottom: 0;
  }
`