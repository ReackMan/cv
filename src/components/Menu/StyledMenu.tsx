import styled from "styled-components";
import {MenuPropsType} from "./Menu";

export const StyledMenu = styled.nav<MenuPropsType>`
  order: 2;
  
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justContent || 'end'};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 50px;
  }

  a {
    color: ${props => props.color || '#666'};
    text-align: center;
    text-decoration: none;

    /* Buttons / Big */
    font-family: DM Sans,sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 130% */
  }
`