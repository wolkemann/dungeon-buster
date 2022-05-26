import { useState } from "react";
import styled from "styled-components";
import { HeroesDatabase } from "../../Database/Heroes";

export default function HeroSelectionAdventureMode() {
  const [hero, setHero] = useState(HeroesDatabase[0]);

  return (
    <MainWindow>
      <Column>
        <HeroPortait
          style={{
            backgroundImage: `url("./resources/faces/${hero.face}")`,
          }}
        />
        <HeroName>
          <p>{`${hero.firstName} ${hero.lastName}`}</p>
          <p>{hero.title}</p>
        </HeroName>
      </Column>

      <InitialStats>
        <p>
          Level {hero.level} {hero.race} {hero.job}
        </p>
        <HeroStatsWindow>
          <HeroStat>Strength</HeroStat>
          <HeroStatNumber>{hero.str}</HeroStatNumber>
          <HeroStat>Dexterity</HeroStat>
          <HeroStatNumber>{hero.dex}</HeroStatNumber>
          <HeroStat>Intelligence</HeroStat>
          <HeroStatNumber>{hero.int}</HeroStatNumber>
          <HeroStat>Charisma</HeroStat>
          <HeroStatNumber>{hero.cha}</HeroStatNumber>
        </HeroStatsWindow>
        <p>Starting Equipment</p>
        <HeroEquipment>
          <EquipmentIcon>&#9876;</EquipmentIcon>
          <EquipmentName>Holy Moonlight</EquipmentName>
          <EquipmentIcon>&#9821;</EquipmentIcon>
          <EquipmentName>Red Dress</EquipmentName>
          <EquipmentIcon>&#9841;</EquipmentIcon>
          <EquipmentName>Neckle</EquipmentName>
        </HeroEquipment>
        <p>Starting Spells and Traits</p>
      </InitialStats>

      <AdventureModeOptions></AdventureModeOptions>
    </MainWindow>
  );
}

const MainWindow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  padding: 10px;
  width: 100vw;
  height: 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const InitialStats = styled(Column)`
  justify-content: start;
  gap: 20px;
`;

const HeroPortait = styled.div`
  width: 313px;
  height: 466px;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
`;

const HeroName = styled.div`
  font-size: 20px;
  padding: 1rem;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
  & > p {
    text-align: center;
  }
`;

const HeroStatsWindow = styled.div`
  display: grid;
  grid-template-columns: auto 35px;
  grid-column-gap: 10px;
`;

const HeroStat = styled.div`
  padding: 3px;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
`;

const HeroStatNumber = styled(HeroStat)`
  text-align: center;
`;

const HeroEquipment = styled(HeroStatsWindow)`
  grid-template-columns: 35px auto;
`;

const EquipmentIcon = styled(HeroStat)`
  text-align: center;
`;

const EquipmentName = styled(HeroStat)``;

const AdventureModeOptions = styled(Column)`
  background-image: url("./resources/backgrounds/map.png");
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
`;
