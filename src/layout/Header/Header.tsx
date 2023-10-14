import React from "react";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {StyledHeader} from './StyledHeader';
import {ToggleTheme} from "../../components/ToggleTheme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Header = (props: any) => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justCont='space-between'>
                    <Logo iconId='logo-2' textAlign='start' flexBasis='423px'/>
                    <ToggleTheme theme={props.theme} themeToggle={props.themeToggle}/>
                    <Menu/>
                    <SocialNetworks/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

