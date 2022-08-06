import styled from "styled-components";
import { Link } from "react-scroll";

export const NavBar = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 110;
  padding: 0 20px;
  box-shadow: 0 0 6px 3px black;
  background-color: rgb(224, 145, 42);
`;

export const NavLogo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

export const NavMenu = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  width: 100px;
  height: 50px;
  color: black;
  text-align: center;
  cursor: pointer;
  padding-top: 15px;
  border: 1px solid black;
  border-radius: 25px;
  margin: 0 20px;

  :hover {
    background-color: black;
    color: white;
  }
`;
