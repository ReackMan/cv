import React from 'react';
import styled from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

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
`

export default App;
