import { useSelector } from "react-redux";
import AdventureMode from "./GameModes/AdventureMode/AdentureMode";
import HeroSelectionAdventureMode from "./GameModes/HeroSelectionAdventureMode/HeroSelectionAdventureMode";
import TitleScreen from "./GameModes/TitleScreen/TitleScreen";

function App() {
  const { gameScreen } = useSelector((store) => store.gameOptions);

  switch (gameScreen) {
    case "AdventureMode":
      return <AdventureMode />;

    case "HeroSelectionAdventureMode":
      return <HeroSelectionAdventureMode />;

    default:
      return <TitleScreen />;
  }
}

export default App;
