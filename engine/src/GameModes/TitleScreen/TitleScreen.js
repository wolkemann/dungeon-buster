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
  width: 1200px;
  height: 800px;
  background-image: url("/resources/backgrounds/map.png");
`;
