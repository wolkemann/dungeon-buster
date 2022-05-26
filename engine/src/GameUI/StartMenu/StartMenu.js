import { useDispatch } from "react-redux";
import { setGameScreen, setGameMode } from "../../GameGlobals/GameOptions";
import styled from "styled-components";

export default function StartMenu() {
  const dispatch = useDispatch();

  function handleAdventureMode() {
    dispatch(setGameScreen("HeroSelectionAdventureMode"));
  }

  return (
    <StartMenuWindow>
      <MenuButton>Tale Mode</MenuButton>
      <MenuButton onClick={handleAdventureMode}>Adventure Mode</MenuButton>
    </StartMenuWindow>
  );
}

const StartMenuWindow = styled.div`
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 250px;
  background-color: var(--primary-color);
  border: 3px var(--secondary-color) solid;
  outline: 5px var(--primary-color) solid;
`;

const MenuButton = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
  font-size: 25px;

  text-align: center;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: 0.1s;
  }
`;
