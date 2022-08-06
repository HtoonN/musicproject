import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  height: 50vh;
  background-color: rgb(238, 30, 30);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FooterSocialIcon = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: yellow;
`;

export const FooterInformation = styled.div`
  width: 100%;
  height: 60%;
  font-size: 18px;
`;

export const IconBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin: 0 10px;

  :hover {
    background: linear-gradient(to top, rgb(245, 2, 144), rgb(2, 217, 245));
    color: whitesmoke;
    box-shadow: 0 0px 6px 3px rgba(245, 217, 221, 0.603);
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  font-size: 17px;
  color: black;
`;

export const ContactBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
