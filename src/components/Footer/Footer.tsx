import React from "react";
import styled from "styled-components";
import logo from '../../../src/assets/images/logo 1.svg'
import HeaderMenu from "../Header/HeaderMenu/HeaderMenu";
import HeaderSocialNetworks from "../Header/HeaderMenu/HeaderSocialNetworks";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLogo><img src={logo} alt=""/></StyledLogo>
            <HeaderMenu/>
            <HeaderSocialNetworks/>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
  display: flex;

  //background-color: #85d954;

  margin: 0 49px 60px 38px;
  //width: 1193px;
`

const StyledLogo = styled.div`
  order: 1;
  flex-basis: 403px;
  text-align: start;

  height: 59px;
`

export default Footer