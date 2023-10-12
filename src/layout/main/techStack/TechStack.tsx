import React from "react";
import {StyledStack, StyledTechStack} from "./StyledTechStack";
import {Icon} from "../../../components/icon/Icon";

const stackLogos = [
    {iconId: 'html', width: "120", height: "120", viewBox: "0 0 120 120"},
    {iconId: 'css', width: "120", height: "119", viewBox: "0 0 120 119"},
    {iconId: 'js', width: "120", height: "120", viewBox: "0 0 120 120"},
    {iconId: 'react', width: "113", height: "101", viewBox: "0 0 113 101"},
    {iconId: 'vector', width: "105", height: "100", viewBox: "0 0 105 100"},
    {iconId: 'bootstrap', width: "88", height: "87", viewBox: "0 0 88 87"},
    {iconId: 'tailwind', width: "131", height: "131", viewBox: "0 0 131 131"},
    {iconId: 'sass', width: "117", height: "87", viewBox: "0 0 117 87"},
    {iconId: 'git', width: "105", height: "105", viewBox: "0 0 105 105"},
    {iconId: 'greensock', width: "120", height: "120", viewBox: "0 0 120 120"},
    {iconId: 'vscode', width: "112", height: "112", viewBox: "0 0 112 112"},
    {iconId: 'gitHub-large', width: "88", height: "88", viewBox: "0 0 88 88"}
]

const TechStack = () => {
    return (
        <StyledTechStack>
            <h2>My Tech Stack</h2>
            <h3>Technologies I’ve been working with recently</h3>
            <StyledStack>
                {stackLogos.map((logo) => (
                    <Icon iconId={logo.iconId} width={logo.width} height={logo.height} viewBox={logo.viewBox}/>
                ))}
            </StyledStack>
        </StyledTechStack>
    )
}


export default TechStack