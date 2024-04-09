import styled from "styled-components";
import {mainTheme} from "../../styles/Theme";


export const StyledWelcome = styled.section<{ ref: any }>`
    display: flex;

    padding-right: 19px;
    padding-top: 10px;
    justify-content: space-between;
    align-items: center;
    //gap: 100px;

    height: 350px;
    scroll-behavior: smooth;



`
export const WelcomeText = styled.h1<{ theme: any }>`
    display: block;
    //flex-basis: 696px;
    //min-width: 494px;

    color: ${props => props.theme === 'light'
            ? mainTheme.colors.accentLight : mainTheme.colors.accentDark};
    font-size: 58px;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;

    text-align: left;

    h1 {
        font-size: 58px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme === 'light' ?
                mainTheme.colors.accentLight : mainTheme.colors.accentDark};
    }
`

export const WelcomeName = styled.text`

    flex-basis: 696px;

    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;

    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    //background-image: linear-gradient(90deg, #e70faa, #00c0fd);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const WelcomeImg = styled.img`
    border-radius: 50%;
    height: 95%;
    left: 10px;
    object-fit: cover;
    position: absolute;
    top: 10px;
    width: 95%;

    @media screen and (max-width: 768px) {
        display: none;
    }

`