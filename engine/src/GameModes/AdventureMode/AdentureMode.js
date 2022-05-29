import { useSelector } from "react-redux";
import GameColumn from "../../GameUI/AdventureModeUI/GameColumn/GameColumn";
import { GameWindow } from "../../GameUI/AdventureModeUI/GameWindow/GameWindow";
import HeroColumn from "../../GameUI/AdventureModeUI/HeroColumn/HeroColumn";
import { MainWindow } from "../../GameUI/AdventureModeUI/MainWindow";
import Navbar from "../../GameUI/AdventureModeUI/Navbar/Navbar";
import SystemWindow from "../../GameUI/AdventureModeUI/SystemWindow/SystemWindow";

export default function AdventureMode() {
  const { systemWindowOpen } = useSelector((store) => store.adventureMode);

  return (
    <MainWindow>
      {systemWindowOpen && <SystemWindow />}
      <Navbar />
      <GameWindow>
        <HeroColumn />
        <GameColumn />
      </GameWindow>
    </MainWindow>
  );
}
