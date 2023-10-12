import React from "react";
import {Card} from "./card/Card";
import project1 from '../../../assets/images/project1.png'
import project2 from '../../../assets/images/project2.png'
import project3 from '../../../assets/images/project3.png'
import project4 from '../../../assets/images/project4.png'
import project5 from '../../../assets/images/project5.png'
import project6 from '../../../assets/images/project6.png'
import {StyledCards, StyledProjects} from "./StyledProjects";

const cardInfo = [
    {
        cardText: `This is sample project description random
                    things are here in description This is sample
                    project lorem ipsum generator for dummy content`,
        headerText: 'Project Tile goes here',
        stackText: ' HTML , JavaScript, SASS, React',
        imgSrc: project1,
        titleSize: '28px'
    },
    {
        cardText: `This is sample project description random
                    things are here in description This is sample
                    project lorem ipsum generator for dummy content`,
        headerText: 'Project Tile goes here',
        stackText: ' HTML , JavaScript, SASS, React',
        imgSrc: project2,
        titleSize: '28px'
    },
    {
        cardText: `This is sample project description random
                    things are here in description This is sample
                    project lorem ipsum generator for dummy content`,
        headerText: 'Project Tile goes here',
        stackText: ' HTML , JavaScript, SASS, React',
        imgSrc: project3,
        titleSize: '28px'
    },
    {
        cardText: `This is sample project description random
                    things are here in description This is sample
                    project lorem ipsum generator for dummy content`,
        headerText: 'Project Tile goes here',
        stackText: ' HTML , JavaScript, SASS, React',
        imgSrc: project4,
        titleSize: '28px'
    },
    {
        cardText: `This is sample project description random
                    things are here in description This is sample
                    project lorem ipsum generator for dummy content`,
        headerText: 'Project Tile goes here',
        stackText: ' HTML , JavaScript, SASS, React',
        imgSrc: project5,
        titleSize: '28px'
    },
    {
        cardText: `This is sample project description random
                    things are here in description This is sample
                    project lorem ipsum generator for dummy content`,
        headerText: 'Project Tile goes here',
        stackText: ' HTML , JavaScript, SASS, React',
        imgSrc: project6,
        titleSize: '28px'
    }

]

const Projects = () => {
    return (
        <StyledProjects>
            <h2>Projects</h2>
            <h3>Things I’ve built so far</h3>
            <StyledCards>
                {cardInfo.map((card) => (
                    <Card titleSize={card.titleSize} imgSrc={card.imgSrc} headerText={card.headerText}
                          cardText={card.cardText} stackText={card.stackText}/>
                ))}
            </StyledCards>
        </StyledProjects>
    )
}


export default Projects