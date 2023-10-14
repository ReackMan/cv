import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon";



export const GoTopBtn = () => {
    debugger
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <StyledGoTopBtn showGoTop={isVisible}>
            <button onClick={() => scrollUp()}>
                <span>
                    <Icon iconId='goUpArrow3' width="45px" height="45px" viewBox="3 0 21 21"/>
                </span>
            </button>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.div<{ showGoTop: boolean }>`
  
  button {
    display: ${ props => props.showGoTop === true ? 'block' : 'none' || 'none'};
  }
  
  span {
    position: fixed;
    //background: rgba(252, 248, 241, 0.8);
    //box-shadow: 2px 2px 5px yellow;
    width: 40px;
    height: 50px;
    border-radius: 25px;
    bottom: 5%;
    left: 92%;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    
    &:hover {
      transform: scale(1.1);
    }
    
  }
  
`