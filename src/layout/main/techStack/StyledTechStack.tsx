import styled from "styled-components";

export const StyledTechStack = styled.section<{ theme: any }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 200px;
    //width: 1193px;

    scroll-behavior: smooth;

    img {
        height: 88px;
        width: 88px;
    }

    h2 {
        text-align: center;
        font-size: 48px;
        font-weight: 700;

        margin: 0 0 49px 0;
    }

    h3 {
        text-align: center;
        font-size: 32px;
        font-weight: 400;

        margin: 0 0 124px 0;
    }


`
export const StyledStack = styled.div`
    //display: flex;
    //flex-wrap: wrap;
    //row-gap: 82px;
    //justify-content: space-between;
    //align-items: center;

    //svg {
    //    width: 16%;
    //}

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    
    @media screen and (max-width: 1024px) {
        svg {
            width: 25%;
        }
    }

    @media screen and (max-width: 768px) {
        svg {
            width: 33%;
        }
    }

    @media screen and (max-width: 576px) {
        svg {
            width: 50%;
        }
    }

`