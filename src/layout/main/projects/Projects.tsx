import React from "react";
import {Card} from "./card/Card";
import todolist from '../../../assets/images/todolist-fon.png'
import socNet from '../../../assets/images/social-network.png'
import counter from '../../../assets/images/counter.png'
import {ProjectsHeader, StyledCards, StyledProjects} from "./StyledProjects";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

const cardInfo = [
    {
        cardText: `ToDo List is an online platform for organizing 
                    your personal or work tasks which can help you 
                    to increase the productivity, prioritise tasks, 
                    manage tasks effectively and improve time management.`,
        headerText: 'Todolist',
        stackText: 'Typescript, React, Redux-toolkit, Axios, Jest, Material UI, Storybook, Styled Components',
        imgSrc: todolist,
        titleSize: '28px',
        gitHub: 'https://github.com/ReackMan/todolist',
        href: 'https://reackman.github.io/todolist'
    },
    {
        cardText: `Social Network is an online platform that allows people 
                    to create an account and interact with other people on the website. 
                    Users can build there virtual world on the site, make friends and share 
                    their thoughts and ideas by writing a post.`,
        headerText: 'Social Network',
        stackText: 'Typescript, React, Redux, React Router, Jest, CSS modules',
        imgSrc: socNet,
        titleSize: '28px',
        gitHub: 'https://github.com/ReackMan/Reackman-s-Social-Network',
        href: 'https://reackman.github.io/Reackman-s-Social-Network'
    },
    {
        cardText: `A small project of the counter on the React library, data is written 
                    to localStorage, two versions of the counter are made: 1. React / Redux 
                    bundle is connected, 2. the counter is made using the useState hook`,
        headerText: 'Counter',
        stackText: 'HTML, Styled Components, React, Redux',
        imgSrc: counter,
        titleSize: '28px',
        gitHub: 'https://github.com/ReackMan/counter',
        href: 'https://reackman.github.io/counter'
    }
]

const Projects = (props: any) => {
    return (
        <StyledProjects id='projects' theme={props.theme}>
            <Container>
                <FlexWrapper direction='column'>
                    <ProjectsHeader>
                        <h2>Projects</h2>
                        <h3>Things I’ve built so far</h3>
                    </ProjectsHeader>
                    <StyledCards>
                        {cardInfo.map((card, index) => (
                                <Card titleSize={card.titleSize} imgSrc={card.imgSrc} headerText={card.headerText}
                                      cardText={card.cardText} stackText={card.stackText} theme={props.theme}
                                      href={card.href} gitHub={card.gitHub}/>
                        ))}
                    </StyledCards>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}


export default Projects