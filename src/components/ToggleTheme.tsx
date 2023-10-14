import React, {useState} from 'react';
import styled, {DefaultTheme} from 'styled-components'
import {Icon} from "./icon/Icon";
import {theme} from "../layout/styles/Theme";

// type ToggleThemeProps = {
//     theme?: DefaultTheme | undefined
//     themeToggle: any
// }

export const ToggleTheme = (props: any) => {
    debugger

    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => setIsChecked(!isChecked);

    return (

        <StyledTogglerButton onClick={() => props.themeToggle()}>
            <Icon iconId={props.theme === 'light' ? 'moon' : 'sun'} width='40px' height='40px' viewBox='0 0 64 64'/>
        </StyledTogglerButton>
    );
};

const StyledTogglerButton = styled.div`
   background: ${({theme}) => theme.img};
  
  align-self: center;
  height: 40px;
  width: 40px;
  
`
