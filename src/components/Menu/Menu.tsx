import React from 'react';
import {Link, List, ListItem, Mask, StyledMenu} from "./StyledMenu";

export type MenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
    theme: any
    asas?: string
    placeMenu?: string
    flexGrow?: string
}

const tabs = [
    { href: '#home', tabName: 'Home' },
    { href: '#about', tabName: 'About' },
    { href: '', tabName: 'Tech Stack' },
    { href: '', tabName: 'Projects' },
    { href: '', tabName: 'Contact' }
]

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu alignItems={props.alignItems} justContent={props.justContent}
                    color={props.color} placeMenu={props.placeMenu} flexGrow={props.flexGrow}>
            <List placeMenu={props.placeMenu}>
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
        </StyledMenu>
    );
};

