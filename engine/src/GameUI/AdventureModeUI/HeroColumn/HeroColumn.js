import { useSelector } from "react-redux";
import ExperienceBar from "./HeroExperienceBar";
import HpBar from "./HeroHpBar";
import { HeroPortait } from "./HeroPortait";
import HeroStats from "./HeroStats";
import HeroEquipment from "./HeroEquipment";

export default function HeroColumn() {
  const { face } = useSelector((store) => store.adventureMode.hero);
  return (
    <div>
      <HeroPortait image={face}>
        <HeroStats />
        <HpBar />
      </HeroPortait>
      <ExperienceBar />
      <HeroEquipment />
    </div>
  );
}
