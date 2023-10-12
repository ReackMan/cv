import React from 'react';
import {StyledMenu} from "./StyledMenu";

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
            <ul>
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <a href={tab.href}> {tab.tabName} </a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

