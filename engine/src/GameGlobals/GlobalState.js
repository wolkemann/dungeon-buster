import { configureStore } from "@reduxjs/toolkit";
import gameOptionsReducer from "../GameGlobals/GameOptions";
import adventureModeReducer from "../GameGlobals/AdventureModeGlobals";

export const store = configureStore({
  reducer: {
    gameOptions: gameOptionsReducer,
    adventureMode: adventureModeReducer,
  },
});
