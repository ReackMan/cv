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

}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <CardHeader headerText={props.headerText} imgSrc={props.imgSrc} imgAlt="image card"
                        titleSize={props.titleSize}/>
            <CardText cardText={props.cardText} stackText={props.stackText}/>
            <BtnBox>
                <Link text='Live Preview' iconId='link-chain' width="20" height="20" viewBox="0 0 20 20"/>
                <Link text='View Code' iconId='gitHub-small' width="20" height="20" viewBox="0 0 20 20"/>
            </BtnBox>
        </StyledCard>
    )
}