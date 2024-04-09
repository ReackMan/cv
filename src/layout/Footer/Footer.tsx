import React from "react";
import {Logo} from "../../components/logo/Logo";
import {FooterContacts} from "./FooterContacts";
import {Menu} from "../../components/menu/Menu";
import {StyledFooter, StyledFooterLine, StyledFooterLogo} from "./StyledFooter";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {GridWrapper} from "../../components/GridWrapper";
import {mainTheme} from "../styles/Theme";

const Footer = (props: any) => {

    const tabs = [
        { href: '/', tabName: 'Home' },
        { href: '#aboutMe', tabName: 'About' },
        { href: '#techStack', tabName: 'Tech Stack' },
        { href: '#projects', tabName: 'Projects' },
        { href: '#mailMe', tabName: 'Contact' }
    ]

    return (
        <StyledFooter theme={props.theme}>
            <Container>
                <GridWrapper>
                    <StyledFooterLogo>
                        <Logo iconId='logo' width="97"
                              fill={ props.theme === 'light' ? mainTheme.colors.accentLight
                                                            : mainTheme.colors.accentDark }
                              height="59" viewBox="0 0 97 59"/>
                    </StyledFooterLogo>
                    <StyledFooterLine queue='1'>
                        <Icon iconId='line' width="100%" height="2" viewBox="0 0 100% 2"/>
                    </StyledFooterLine>
                    <StyledFooterLine queue='2'>
                        <Icon iconId='line' width="100%" height="2" viewBox="0 0 100% 2"/>
                    </StyledFooterLine>
                    <Menu theme={props.theme} alignItems='end' color='var(--Solid-Heading, #42446E)'
                          justContent='start' placeMenu='footer' tabs={tabs}/>
                    <FooterContacts theme={props.theme}/>
                    <SocialNetworks theme={props.theme}/>
                    <p>Designed and built by<text> Artem DM </text>with<text> Love </text>&<text> Coffee</text></p>
                </GridWrapper>
            </Container>
        </StyledFooter>
    )
}

export default Footer