import React from "react";
import {Card} from "./card/Card";
import project1 from '../../../assets/images/proj1.png'
import project2 from '../../../assets/images/proj2.png'
import project3 from '../../../assets/images/proj3.png'
import project4 from '../../../assets/images/proj4.png'
import project5 from '../../../assets/images/proj5.png'
import project6 from '../../../assets/images/proj6.png'
import {ProjectsHeader, StyledCards, StyledProjects} from "./StyledProjects";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

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

const Projects = (props: any) => {
    return (
        <StyledProjects theme={props.theme}>
            <Container>
                <FlexWrapper direction='column'>
                    <ProjectsHeader>
                        <h2>Projects</h2>
                        <h3>Things I’ve built so far</h3>
                    </ProjectsHeader>
                    <StyledCards>
                        {cardInfo.map((card) => (
                            <Card titleSize={card.titleSize} imgSrc={card.imgSrc} headerText={card.headerText}
                                  cardText={card.cardText} stackText={card.stackText} theme={props.theme}/>
                        ))}
                    </StyledCards>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}


export default Projects