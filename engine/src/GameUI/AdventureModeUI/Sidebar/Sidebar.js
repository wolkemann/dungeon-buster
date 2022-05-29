import styled from "styled-components";
import HeroEquipment from "./HeroEquipment";

export default function Sidebar() {
  return (
    <Wrapper>
      <HeroEquipment />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
  background-color: var(--primary-color);
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
  flex-grow: 1;
  margin-top: 2px;
  margin-bottom: 11px;
`;
