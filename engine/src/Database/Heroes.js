import Hero from "../Classes/Hero";

const LanaClarke = new Hero({
  level: 1,
  firstName: "Lana",
  lastName: "Clarke",
  title: "the Black Orchid",
  race: "Half-Elf",
  job: "Bard",
  face: "lana_face.png",
  hp: 200,
  maxHp: 200,
  str: 10,
  dex: 10,
  int: 10,
  cha: 10,
  money: 1000,
  weapon: null,
  armor: null,
  trinket: null,
  spellbook: [],
  inventory: [],
  background: "",
});

export const HeroesDatabase = [LanaClarke];
