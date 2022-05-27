import { useSelector } from "react-redux";
import styled from "styled-components";

export default function HeroStats() {
  const { level, str, dex, int, cha } = useSelector(
    (store) => store.adventureMode.hero
  );
  return (
    <Wrapper>
      <Name>LVL</Name>
      <Number>{level}</Number>

      <Name>STR</Name>
      <Number>{str}</Number>

      <Name>DEX</Name>
      <Number>{dex}</Number>

      <Name>INT</Name>
      <Number>{int}</Number>

      <Name>CHA</Name>
      <Number>{cha}</Number>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5px;
  margin-top: 5px;
  display: grid;
  grid-template-columns: auto;
  row-gap: 1px;
`;

const Name = styled.div`
  width: 35px;
  padding: 2px;
  text-align: center;
  background-color: var(--primary-color);
`;

const Number = styled(Name)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  border: 2px var(--secondary-color) solid;
  border-radius: 999px;
`;
