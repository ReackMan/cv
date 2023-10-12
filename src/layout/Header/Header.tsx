import React from "react";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {StyledHeader} from './StyledHeader';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo iconId='logo-2' textAlign='start' flexBasis='453px'/>
            <Menu/>
            <SocialNetworks/>
        </StyledHeader>
    )
}

