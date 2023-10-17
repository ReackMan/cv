import styled from "styled-components";
import {mainTheme} from "../../../styles/Theme";

export const StyledCard = styled.div<{ theme: any }>`
  background-color: ${props => props.theme === 'light'
          ? mainTheme.colors.lightProjBg : mainTheme.colors.darkProjBg};
  width: 30%;
  //height: 585px;
  min-width: 290px;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  
  
`
export const BtnBox = styled.div`
  //margin: 0 25px 21px 15px;
  margin-left: 15px;
  padding-bottom: 25px;
  align-self: start;
  display: flex;
  gap: 25px;
`