import React from "react";
import styled from "styled-components";
import gitHub from "../../../assets/images/gitHub.svg";
import twitter from "../../../assets/images/twitter.svg";
import linkedin from "../../../assets/images/linkedin.svg";

const HeaderSocialNetworks = () => {
    return (
        <StyledHeaderSocialNetworks>
            <StyledSocials href='/121212'><img src={gitHub} alt=''/></StyledSocials>
            <StyledSocials href='/343434'><img src={twitter} alt=''/></StyledSocials>
            <StyledSocials href='/565656'><img src={linkedin} alt=''/></StyledSocials>
        </StyledHeaderSocialNetworks>
    )
}


const StyledHeaderSocialNetworks = styled.div`
  order: 3;
  flex-basis: 181px;
  
  text-align: end;
  
  display: flex;
  gap: 20px;
  
  justify-content: flex-end;
`

const StyledSocials = styled.a`
  width: 30px;
  height: 30px;
`


export default HeaderSocialNetworks