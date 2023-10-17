import React, {useRef} from "react";
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


export const Header = (props: any) => {

    const [isMenuOpen, toggleBurgerMenu] = useBurgerMenu()

    const menuRef = useRef()
    const toggleRef = useRef()



    useOnClickOutside([toggleRef,menuRef], () => {

        if (isMenuOpen) {
            toggleBurgerMenu();
        }
    });
    return (
        <StyledHeader theme={props.theme}>
            <Container>
                <FlexWrapper justCont='space-between'>
                    <Logo iconId={props.theme === 'light' ? 'logo-2' : 'logo-3'}
                          textAlign='start' width='100px'
                          height='71px' viewBox='0 0 120 50' padding='15px' flexGrow='2'/>
                    <Menu theme={props.theme} placeMenu='header' flexGrow='3'/>
                    <ToggleMenu toggleRef={toggleRef} toggleBurgerMenu={toggleBurgerMenu} theme={props.theme}
                                isMenuOpen={isMenuOpen}/>
                    <BurgerMenu menuRef={menuRef} theme={props.theme} isMenuOpen={isMenuOpen}
                                toggleBurgerMenu={toggleBurgerMenu}
                                themeToggle={props.themeToggle}/>
                    <ToggleBtn theme={props.theme} placeBtn='header' themeToggle={props.themeToggle}/>
                    <SocialNetworks theme={props.theme} padding='20px' placeSocials='header'/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

