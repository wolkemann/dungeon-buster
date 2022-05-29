import styled from "styled-components";
import { Button } from "../Button";

export default function HeroEquipment() {
  return (
    <Wrapper>
      <Button>Holy Moonlight</Button>
      <Button>Red dress</Button>
      <Button>Neckle</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 3px;
  flex-flow: column wrap;
  justify-content: space-between;
`;
