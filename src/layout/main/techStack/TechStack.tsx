import React from "react";
import {StyledStack, StyledTechStack} from "./StyledTechStack";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {TechIconAnimation} from "../../../animations/Animations";


type StackType = {
    iconId: string
    name: string
    viewBox: string
    fill?: string
}

const TechStack = ({theme}: any) => {


    const stackLogos: StackType[] = [
        {iconId: 'HTML', name: 'HTML', viewBox: "0 0 24 24"},
        {iconId: 'CSS', name: 'CSS', viewBox: "0 0 32 32"},
        {iconId: 'JavaScript', name: 'JavaScript', viewBox: "0 0 32 32"},
        {iconId: 'React', name: 'React', viewBox: "0 0 512 512"},
        {iconId: 'Redux', name: 'Redux', viewBox: "0 0 24 24"},
        {iconId: 'bootstrap', name: 'Bootstrap', viewBox: "0 0 88 87"},
        {iconId: 'Tailwind', name: 'Tailwind', viewBox: "0 0 24 24"},
        {iconId: 'Sass', name: 'Sass', viewBox: "0 0 32 32"},
        {iconId: 'TypeScript', name: 'TypeScript', viewBox: "0 0 16 16"},
        {iconId: 'Material UI', name: 'Material UI', viewBox: "0 0 24 24"},
        {iconId: 'Storybook', name: 'Storybook', viewBox: "0 0 32 32"},
        {iconId: 'Jest', name: 'Jest', viewBox: "0 0 24 24"},
        {iconId: 'Webpack', name: 'Webpack', viewBox: "0 0 24 24"},
        {iconId: 'Figma', name: 'Figma', viewBox: "0 0 24 24"},
        {iconId: 'Git', name: 'Git', viewBox: "0 0 16 16"},
        {iconId: 'Styled Components', name: 'Styled Components', viewBox: "0 0 24 24"},
        {iconId: theme === 'light' ? 'greensock' : 'greensock-light', name: 'Greensock', viewBox: "0 0 120 120"},
        {iconId: theme === 'light' ? 'gitHub-large' : 'gitHub-large-light', name: 'GitHub', viewBox: "0 0 88 88"}
    ]


    return (
        <StyledTechStack id='techStack' theme={theme}>
            <h2>My Tech Stack</h2>
            <h3>Technologies I’ve been working with recently</h3>
            <StyledStack>
                {/*{props.theme === 'light' ?*/}
                {/*    stackLogos[0].map((logo) => (*/}
                {/*        <TechIconAnimation>*/}
                {/*            <TechIcon>*/}
                {/*                <Icon iconId={logo.iconId} width={logo.width} */}
                {/*                      height={logo.height} viewBox={logo.viewBox}/>*/}
                {/*            </TechIcon>*/}
                {/*        </TechIconAnimation>*/}
                {/*    ))*/}
                {/*    : stackLogos[1].map((logo) => (*/}
                {/*        <Icon iconId={logo.iconId} width={logo.width} height={logo.height} viewBox={logo.viewBox}/>*/}
                {/*    ))*/}
                {/*}*/}
                {stackLogos.map((logo, index) => (
                    <TechIconAnimation index={index}>
                        <TechIcon>
                            <Icon iconId={logo.iconId} width='6rem' fill={logo.fill || 'currentColor'}
                                  height='6rem' viewBox={logo.viewBox}/>
                            <h4>{logo.name}</h4>
                        </TechIcon>
                    </TechIconAnimation>
                ))}
            </StyledStack>
        </StyledTechStack>
    )
}


export default TechStack

export const TechIcon = styled.div`
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
`
