import { useSelector } from "react-redux";
import styled from "styled-components";
import { HeroPortait } from "./HeroPortait";

export default function HeroColumn() {
  const { hero } = useSelector((store) => store.adventureMode);
  return (
    <div>
      <HeroPortait image={hero.face} />
    </div>
  );
}
