import React from "react";
import {Logo} from "../logo/Logo";
import {StyledSocialNetworks} from "./StyledSocialNetworks";

const SocialNetworks = () => {
    return (
        <StyledSocialNetworks>
            <Logo iconId='gitHub' width='30px' height='30px' viewBox='0 0 30 30'/>
            <Logo iconId='twitter' width='30px' height='30px' viewBox='0 0 32 32'/>
            <Logo iconId='linkedin' width='30px' height='30px' viewBox='0 0 30 30'/>
        </StyledSocialNetworks>
    )
}



export default SocialNetworks