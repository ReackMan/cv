import styled from "styled-components";

export const StyledTechStack = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 200px;
  //width: 1193px;

  img {
    height: 88px;
    width: 88px;
  }

  h2 {
    color: #42446E;
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

    margin: 0 0 124px 0;
  }
`
export const StyledStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 82px 50px;
  justify-content: space-between;
`