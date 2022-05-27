import styled from "styled-components";
import { NavbarButton } from "./NavbarButton";
import { NavbarLabel } from "./NavbarLabel";

export default function Navbar() {
  return (
    <Wrapper>
      <NavbarButton>&#9812;</NavbarButton>
      <NavbarButton>&#10086;</NavbarButton>
      <NavbarButton>&#9815;</NavbarButton>
      <NavbarButton>&#9909;</NavbarButton>
      <NavbarLabel>Adventure Mode</NavbarLabel>
      <NavbarButton>&#9778;</NavbarButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  gap: 3px;

  margin-bottom: 3px;
  outline: 3px var(--secondary-color) solid;
`;
