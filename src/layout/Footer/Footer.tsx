import React from "react";
import {Logo} from "../../components/logo/Logo";
import {FooterContacts} from "./FooterContacts";
import {Menu} from "../../components/menu/Menu";
import {StyledFooter, StyledFooterLine, StyledFooterLogo} from "./StyledFooter";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {GridWrapper} from "../../components/GridWrapper";

const Footer = (props: any) => {

    return (
        <StyledFooter theme={props.theme}>
            <Container>
                <GridWrapper>
                    <StyledFooterLogo>
                        <Logo iconId={props.theme === 'light' ? 'logo-2' : 'logo-3'} width="97"
                              height="59" viewBox="0 0 97 59"/>
                    </StyledFooterLogo>
                    <StyledFooterLine queue='1'>
                        <Icon iconId='line' width="100%" height="2" viewBox="0 0 100% 2"/>
                    </StyledFooterLine>
                    <StyledFooterLine queue='2'>
                        <Icon iconId='line' width="100%" height="2" viewBox="0 0 100% 2"/>
                    </StyledFooterLine>
                    <Menu theme={props.theme} alignItems='end' color='var(--Solid-Heading, #42446E)'
                          justContent='start' placeMenu='footer'/>
                    <FooterContacts theme={props.theme}/>
                    <SocialNetworks theme={props.theme}/>
                    <p>Designed and built by<text> Artem DM </text>with<text> Love </text>&<text> Coffee</text></p>
                </GridWrapper>
            </Container>
        </StyledFooter>
    )
}

export default Footer