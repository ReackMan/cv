import React from 'react';
import styled from 'styled-components'

export const ToggleTheme = (props: any) => {

    return (
        //@ts-ignore
        <StyledTogglerButton theme={props.theme} onClick={() => props.themeToggle()}>
            Switch
        </StyledTogglerButton>
    );
};

const StyledTogglerButton = styled.button`
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
  border: 2px solid ${({theme}) => theme.toggleBorder};

  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`
