import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { HeroesDatabase } from "../../Database/Heroes";
import { initializeAdventure } from "../../GameGlobals/AdventureModeGlobals";
import { setGameScreen } from "../../GameGlobals/GameOptions";

export default function HeroSelectionAdventureMode() {
  const dispatch = useDispatch();
  const [heroCursor, setHeroCursor] = useState(0);
  const [adventureLength, setAdventureLength] = useState(1);
  const [classScenarioEnabled, setClassScenarioEnabled] = useState(false);
  const [heroScenarioEnabled, setHeroScenarioEnabled] = useState(false);
  const hero = HeroesDatabase[heroCursor];

  function handleStartAdventure() {
    dispatch(setGameScreen("AdventureMode"));
    dispatch(initializeAdventure({ hero: { ...hero } }));
  }

  function handleHeroCursorBack() {
    if (heroCursor === 0) {
      setHeroCursor(HeroesDatabase.length - 1);
      return;
    }
    setHeroCursor(heroCursor - 1);
  }

  function handleHeroCursorNext() {
    if (heroCursor === HeroesDatabase.length - 1) {
      setHeroCursor(0);
      return;
    }
    setHeroCursor(heroCursor + 1);
  }

  return (
    <MainWindow>
      {/**
       *
       * HERO PORTAIT / NAME COLUMN
       *
       */}
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
      {/**
       *
       * HERO INITIAL STAT COLUMN
       *
       */}
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
      {/**
       *
       * ADVENTURE MODE OPTIONS COLUMN
       *
       */}
      <AdventureModeOptions>
        <OptionsWindow>
          <SelectHeroCursor>
            <SelectHeroArrow onClick={handleHeroCursorBack}>
              &#11164;
            </SelectHeroArrow>
            <p>Choose Hero</p>
            <SelectHeroArrow onClick={handleHeroCursorNext}>
              &#11166;
            </SelectHeroArrow>
          </SelectHeroCursor>
          <SelectHeroName>
            {hero.firstName} {hero.lastName}
          </SelectHeroName>
        </OptionsWindow>

        <OptionsWindow>
          <OptionsLabel>Adventure Length</OptionsLabel>
          <AdventureLengthOptions>
            <AdventureLengthButton
              onClick={() => {
                setAdventureLength(0);
              }}
              className={adventureLength === 0 ? "active" : null}
            >
              Short
            </AdventureLengthButton>
            <AdventureLengthButton
              onClick={() => {
                setAdventureLength(1);
              }}
              className={adventureLength === 1 ? "active" : null}
            >
              Medium
            </AdventureLengthButton>
            <AdventureLengthButton
              onClick={() => {
                setAdventureLength(2);
              }}
              className={adventureLength === 2 ? "active" : null}
            >
              Long
            </AdventureLengthButton>
          </AdventureLengthOptions>
          <ExtraOptions>
            <ExtraOptionsCheckBox
              onClick={() => {
                setClassScenarioEnabled(!classScenarioEnabled);
              }}
              className={classScenarioEnabled ? "active" : null}
            />{" "}
            <p>Class scenario</p>
            <ExtraOptionsCheckBox
              onClick={() => {
                setHeroScenarioEnabled(!heroScenarioEnabled);
              }}
              className={heroScenarioEnabled ? "active" : null}
            />{" "}
            <p>Hero scenario</p>
          </ExtraOptions>
        </OptionsWindow>

        <OptionsWindow>
          <StartButton onClick={handleStartAdventure}>
            Start Adventure
          </StartButton>
        </OptionsWindow>
      </AdventureModeOptions>
    </MainWindow>
  );
}
/**
 *
 *  Hero Selection Screen - Adventure Mode Styled Components
 *
 */
const MainWindow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  padding: 10px;
  width: 950px;
  height: 605px;
`;
/**
 *
 *  Column generic Styled component
 *
 */
const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;
/**
 *
 *  Intial Stat Column Styled component
 *
 */
const InitialStats = styled(Column)`
  justify-content: start;
  gap: 20px;
`;
/**
 *
 *  Hero Portait Styled component
 *
 */
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
/**
 *
 *  Hero Stat Section Styled component
 *
 */
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
/**
 *
 *  Hero Equipment Section Styled component
 *
 */
const HeroEquipment = styled(HeroStatsWindow)`
  grid-template-columns: 35px auto;
`;

const EquipmentIcon = styled(HeroStat)`
  text-align: center;
`;

const EquipmentName = styled(HeroStat)``;
/**
 *
 *  Adventure Mode Options Column Styled component
 *
 */
const AdventureModeOptions = styled(Column)`
  padding: 10px;
  background-image: url("./resources/backgrounds/map.png");
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
`;

const OptionsWindow = styled.div`
  padding: 5px;
  background-color: var(--primary-color);
`;
/**
 *
 *  Select Hero Styled component
 *
 */
const SelectHeroArrow = styled.p`
  outline: 3px var(--secondary-color) solid;
  &:hover {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    transition: 0.1s;
  }
`;

const SelectHeroCursor = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: auto auto auto;
  margin-bottom: 8px;
`;

const SelectHeroName = styled.div`
  text-align: center;
  padding: 3px;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
`;
/**
 *
 *  Adventure Options Styled component
 *
 */
const AdventureLengthOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
`;

const OptionsLabel = styled.div`
  text-align: center;
  margin-bottom: 8px;
`;

const AdventureLengthButton = styled.div`
  padding: 3px;
  text-align: center;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: 0.1s;
  }

  &.active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
`;

const ExtraOptions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 5px;
  margin-top: 10px;
  align-items: center;
`;

const ExtraOptionsCheckBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: var(--primary-color);
  border: 3px var(--secondary-color) solid;

  &:hover {
    background-color: var(--secondary-color);
    transition: 0.1s;
  }
  &.active {
    background-color: var(--secondary-color);
  }
`;
/**
 *
 *  Start Button Styled component
 *
 */
const StartButton = styled.div`
  padding: 10px;
  text-align: center;
  background-color: var(--primary-color);
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;

  &:hover {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    transition: 0.1s;
  }
`;
