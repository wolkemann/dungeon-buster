import { useSelector } from "react-redux";
import AdventureMode from "./GameModes/AdventureMode/AdentureMode";
import HeroSelectionAdventureMode from "./GameModes/HeroSelectionAdventureMode/HeroSelectionAdventureMode";
import Test from "./GameModes/Test/Test";
import TitleScreen from "./GameModes/TitleScreen/TitleScreen";

function App() {
  const { gameScreen } = useSelector((store) => store.gameOptions);

  switch (gameScreen) {
    case "Test":
      return <Test />;
    case "AdventureMode":
      return <AdventureMode />;

    case "HeroSelectionAdventureMode":
      return <HeroSelectionAdventureMode />;

    default:
      return <TitleScreen />;
  }
}

export default App;
