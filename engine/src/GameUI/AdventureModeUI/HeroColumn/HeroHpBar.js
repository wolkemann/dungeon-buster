import { useSelector } from "react-redux";

export default function HpBar() {
  const { hp, maxHp } = useSelector((state) => state.adventureMode.hero);

  const d = Math.ceil((hp / maxHp) * 100);
}
