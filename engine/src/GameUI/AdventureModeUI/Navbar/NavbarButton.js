import styled from "styled-components";

export const NavbarButton = styled.div`
  text-align: center;
  font-size: 1.5em;
  min-width: 45px;
  padding: 0px 5px;
  border: 3px var(--primary-color) solid;
  background-color: var(--primary-color);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
`;
