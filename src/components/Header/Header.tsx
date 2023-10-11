import React from "react";
import styled from "styled-components";
import logo from '../../../src/assets/images/logo 1.svg'
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderSocialNetworks from "./HeaderMenu/HeaderSocialNetworks";

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo><img src={logo} alt=""/></StyledLogo>
            <HeaderMenu/>
            <HeaderSocialNetworks/>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
  display: flex;

  //background-color: #85d954;

  margin: 41px 49px 220px 38px;
  //width: 1193px;
`

const StyledLogo = styled.div`
  order: 1;
  flex-basis: 403px;
  text-align: start;
  
  height: 59px;
`

export default Header