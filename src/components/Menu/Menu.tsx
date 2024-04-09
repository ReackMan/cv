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

type PropsType = {
    tabs: {href: string, tabName: string}[]
}

export const Menu = ({tabs, ...props}: MenuPropsType & PropsType) => {
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

