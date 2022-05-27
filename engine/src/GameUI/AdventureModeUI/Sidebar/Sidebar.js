import styled from "styled-components";

export default function Sidebar() {
  return <Wrapper></Wrapper>;
}

export const Wrapper = styled.div`
  background-color: var(--secondary-color);
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
  flex-grow: 1;
  margin-top: 2px;
  margin-bottom: 11px;
`;
