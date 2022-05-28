import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../Button";
import { setGameScreen } from "../../../GameGlobals/GameOptions";
import { toggleSystemWindow } from "../../../GameGlobals/AdventureModeGlobals";

export default function SystemWindow() {
  const dispatch = useDispatch();

  async function handleFullScreen() {
    const isFullScreen = await window.Neutralino.window.isFullScreen();
    isFullScreen
      ? await window.Neutralino.window.exitFullScreen()
      : await window.Neutralino.window.setFullScreen();
  }

  function handleTitleScreen() {
    dispatch(toggleSystemWindow());
    dispatch(setGameScreen("TitleScreen"));
  }

  function handleReturnToGame() {
    dispatch(toggleSystemWindow());
  }

  async function handleCloseGame() {
    await window.Neutralino.app.exit();
  }
  return (
    <Wrapper>
      <Menu>
        <Button onClick={handleFullScreen} textAlign="center">
          Toggle Full Screen
        </Button>

        <Button onClick={handleReturnToGame} textAlign="center">
          Return to Game
        </Button>

        <Button onClick={handleTitleScreen} textAlign="center">
          Back to Title Screen
        </Button>

        <Button onClick={handleCloseGame} textAlign="center">
          Close Game
        </Button>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 60%);
`;

const Menu = styled.div`
  margin: auto;
  width: 300px;
  height: 400px;
  background-color: var(--primary-color);
  border: 3px var(--secondary-color) solid;
  outline: 5px var(--primary-color) solid;
`;
