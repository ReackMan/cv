import React, {useEffect, useRef} from "react";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {StyledHeader} from './StyledHeader';
import {ToggleBtn} from "../../components/ToggleTheme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {BurgerMenu} from "../../components/burgerMenu/BurgerMenu";
import {ToggleMenu} from "../../components/burgerMenu/ToggleMenu";
import {useBurgerMenu, useOnClickOutside} from "../../components/burgerMenu/useBurgerMenu";
import {useWindowDimensions} from "../../components/useWindowDimensions";
import {mainTheme} from "../styles/Theme";


export const Header = (props: any) => {

    const [isMenuOpen, toggleBurgerMenu] = useBurgerMenu()
    const {widthInner, heightInner} = useWindowDimensions()

    const menuRef = useRef()
    const toggleRef = useRef()

    const closeBurger = (widthInner: number, isMenuOpen: boolean) => {
        if (widthInner > 768 && isMenuOpen) {
            toggleBurgerMenu()
        }
    }

    const tabs = [
        { href: '/', tabName: 'Home' },
        { href: '#aboutMe', tabName: 'About' },
        { href: '#techStack', tabName: 'Tech Stack' },
        { href: '#projects', tabName: 'Projects' },
        { href: '#mailMe', tabName: 'Contact' }
    ]

    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth > 768 && isMenuOpen) {
                toggleBurgerMenu()
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useOnClickOutside([toggleRef, menuRef], () => {

        if (isMenuOpen) {
            toggleBurgerMenu();
        }
    });
    return (
        <StyledHeader theme={props.theme}>
            <Container>
                <FlexWrapper justCont='space-between'>
                    <Logo iconId='logo' fill={ props.theme === 'light' ? mainTheme.colors.accentLight
                                                                       : mainTheme.colors.accentDark }
                          textAlign='start' width='100px'
                          height='77px' viewBox='0 0 100 71' padding='15px' flexGrow='2'/>
                    <Menu theme={props.theme} placeMenu='header' flexGrow='3' tabs={tabs}/>
                    <ToggleMenu toggleRef={toggleRef} toggleBurgerMenu={toggleBurgerMenu} theme={props.theme}
                                isMenuOpen={isMenuOpen}/>
                    <BurgerMenu menuRef={menuRef} theme={props.theme} isMenuOpen={isMenuOpen}
                                themeToggle={props.themeToggle} tabs={tabs}/>
                    <ToggleBtn theme={props.theme} placeBtn='header' themeToggle={props.themeToggle}/>
                    <SocialNetworks theme={props.theme} padding='20px' placeSocials='header'/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

