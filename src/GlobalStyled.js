import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}
`;

export const Backgorund = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url("/images/background.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export default GlobalStyled;
