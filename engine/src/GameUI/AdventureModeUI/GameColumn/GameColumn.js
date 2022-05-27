import styled from "styled-components";

export default function GameColumn() {
  return <Wrapper>S</Wrapper>;
}

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 10px;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
  background-image: url("./resources/backgrounds/map.png");
`;
