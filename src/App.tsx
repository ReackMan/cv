import React from 'react';
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Main from "./layout/main/Main";
import drawing from './assets/images/drawing.svg'

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Footer/>
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
  
  background-image: url(${drawing});
  background-position: 120% 20%;
  background-repeat: no-repeat;
`

export default App;
