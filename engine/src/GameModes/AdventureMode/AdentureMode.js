import { useSelector } from "react-redux";
import GameColumn from "../../GameUI/AdventureModeUI/GameColumn/GameColumn";
import { GameWindow } from "../../GameUI/AdventureModeUI/GameWindow/GameWindow";
import HeroColumn from "../../GameUI/AdventureModeUI/HeroColumn/HeroColumn";
import { MainWindow } from "../../GameUI/AdventureModeUI/MainWindow";
import Navbar from "../../GameUI/AdventureModeUI/Navbar/Navbar";
import Sidebar from "../../GameUI/AdventureModeUI/Sidebar/Sidebar";

export default function AdventureMode() {
  const { adventureMode } = useSelector((store) => store);

  return (
    <MainWindow>
      <Navbar />
      <GameWindow>
        <HeroColumn />
        <GameColumn />
      </GameWindow>
      <Sidebar />
    </MainWindow>
  );
}
