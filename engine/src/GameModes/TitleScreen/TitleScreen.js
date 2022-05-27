import styled from "styled-components";
import StartMenu from "./StartMenu";

export default function TitleScreen() {
  return (
    <TitleScreenWindow>
      <StartMenu />
    </TitleScreenWindow>
  );
}

const TitleScreenWindow = styled.div`
  width: 950px;
  height: 605px;
  background-image: url("/resources/backgrounds/map.png");
`;
