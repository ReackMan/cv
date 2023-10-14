import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-areas: 
  'logo contacts socials'
  'svg svg svg'
  'menu description description';

  grid-template-columns: 6fr 4fr 2fr;
  grid-template-rows: 5fr 2fr 4fr;
  
`