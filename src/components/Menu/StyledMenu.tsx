import styled from "styled-components";
import {MenuPropsType} from "./Menu";
import {theme} from "../../layout/styles/Theme";

export const StyledMenu = styled.nav<MenuPropsType>`
  order: 2;
  
   display: flex;
   align-items: ${props => props.alignItems || 'center'};
   justify-content: ${props => props.justContent || 'end'};
  
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 20px;
`

export const Link = styled.a`
  color: ${props => props.color || '#666'};
  text-align: center;

  /* Buttons / Big */
  font-family: DM Sans,sans-serif;
  font-size: 20px;
  //font-style: normal;
  font-weight: 500;
  //line-height: 26px; /* 130% */
  color: transparent;
`



export const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.fontLight};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }

`

export const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: #000000;
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(12deg) translateX(4px);
      color: ${theme.colors.accentLight};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-4px);
      }
    }


  }
`

