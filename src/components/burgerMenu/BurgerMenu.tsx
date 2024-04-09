import React from 'react';
import {Link, List, ListItem, Mask, StyledBurgerMenu} from "./StyledBurgerMenu";
import {ToggleBtn} from "../ToggleTheme";

export type BurgerMenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
    theme?: any
    asas?: string
    isMenuOpen?: any
    themeToggle?: any
    menuRef?:any
}

type PropsType = {
    tabs: {href: string, tabName: string}[]
}

export const BurgerMenu = ({tabs, ...props}: BurgerMenuPropsType & PropsType) => {

    return (
        <StyledBurgerMenu id={'burger_menu'} alignItems={props.alignItems} justContent={props.justContent}
                          color={props.color} isMenuOpen={props.isMenuOpen}
                          theme={props.theme} ref={props.menuRef}>
            <List>
                {tabs.map((tab, index) => (
                    <ListItem key={index} theme={props.theme}>
                        <Link href={tab.href}>
                            {tab.tabName}
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <ToggleBtn theme={props.theme} themeToggle={props.themeToggle}/>
        </StyledBurgerMenu>
    );
};

