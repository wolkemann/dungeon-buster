import styled from "styled-components";
import { useSelector } from "react-redux";

import StartMenu from "../../GameUI/StartMenu/StartMenu";

export default function TitleScreen() {
  return (
    <TitleScreenWindow>
      <StartMenu />
    </TitleScreenWindow>
  );
}

const TitleScreenWindow = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/resources/backgrounds/map.png");
`;
