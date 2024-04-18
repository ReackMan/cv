import {CardHeader} from "./cardHeader/CardHeader";
import {CardText} from "./cardText/CardText";
import Link from "./cardLink/Link";
import React from "react";
import {BtnBox, StyledCard} from "./StyledCard";


type CardPropsType = {
    titleSize: string
    imgSrc: string
    headerText: string
    cardText: string
    stackText: string
    theme: any
    href: string
    gitHub: string
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard theme={props.theme}>
            <CardHeader headerText={props.headerText} imgSrc={props.imgSrc} imgAlt="image card"
                        titleSize={props.titleSize} theme={props.theme} href={props.href}/>
            <CardText cardText={props.cardText} stackText={props.stackText} theme={props.theme} />
            <BtnBox>
                <Link theme={props.theme} text='Live Preview' href={props.href} target='_blank'
                      iconId={props.theme === 'light' ? 'link-chain' : 'link-chain-light'}
                      width="20" height="20" viewBox="0 0 20 20" fill='none'/>
                <Link theme={props.theme} text='View Code' href={props.gitHub} target='_blank'
                      iconId={props.theme === 'light' ? 'gitHub-small' : 'gitHub-small-light'}
                      width="20" height="20" viewBox="0 0 20 20"/>
            </BtnBox>
        </StyledCard>
    )
}