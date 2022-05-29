export default class Scenario {
  constructor() {}
}

const scenario = {
  location: "forest",
  name: "In The Forest of The Night",
  scenes: [
    {
      id: 0,
      messages: ["davai", "super davai", "hyper davi my comrade"],
      choices: [
        { id: 0, text: "Vai a casa", reward: [], nextScene: 1 },
        { id: 1, text: "vai dalla nonna", reward: [], nextScene: 2 },
      ],
    },
    {},
  ],
};
