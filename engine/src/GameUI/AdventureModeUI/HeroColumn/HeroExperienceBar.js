import { useSelector } from "react-redux";
import styled from "styled-components";

export default function ExperienceBar() {
  const { experience } = useSelector((state) => state.adventureMode.hero);

  return (
    <BarWrapper>
      <Bar exp={experience}></Bar>
    </BarWrapper>
  );
}

const BarWrapper = styled.div`
  outline: 3px var(--secondary-color) solid;
  background-color: var(--secondary-color);
  margin-bottom: 3px;
`;

const Bar = styled.div`
  background-color: var(--primary-color);
  width: ${(props) => props.exp}%;
  height: 7px;
`;
