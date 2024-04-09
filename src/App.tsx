import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {Header} from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";
import drawing from './assets/images/drawing.svg'
import {GoTopBtn} from "./components/GoTopBtn";
import {GlobalStyle} from "./layout/styles/Global.styled";
import {darkTheme, lightTheme} from "./layout/styles/Theme";
import {useDarkMode} from "./components/useDarkMode";


function App() {

    const [theme, themeToggle] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;


    return (

        <StyledApp>
            <ThemeProvider theme={themeMode}>
                <GlobalStyle customTheme={theme}/>
                <Header theme={theme} themeToggle={themeToggle}/>
                <Main theme={theme}/>
                {/*<div>height {height} width {width}</div>*/}
                <Footer theme={theme}/>
                <GoTopBtn theme={theme}/>
            </ThemeProvider>
        </StyledApp>

    );
}

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${drawing});
  background-position: 120% 20%;
  background-repeat: no-repeat;

    @media screen and (max-width: 767px){
        background-image: none;
    }
`

export default App;
