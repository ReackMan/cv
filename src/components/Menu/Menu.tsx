import React from 'react';
import {Link, List, ListItem, Mask, StyledMenu} from "./StyledMenu";

export type MenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
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
        <StyledMenu alignItems={props.alignItems} justContent={props.justContent} color={props.color}>
            <List>
                {tabs.map((tab, index) => (
                    <ListItem key={index}>
                        <Link href={tab.href}>
                            {tab.tabName}
                            <Mask>
                                <span>{tab.tabName}</span>
                            </Mask>
                            <Mask>
                                <span>{tab.tabName}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </StyledMenu>
    );
};

