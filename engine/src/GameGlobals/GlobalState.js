import { configureStore } from "@reduxjs/toolkit";
import gameOptionsReducer from "../GameGlobals/GameOptions";

export const store = configureStore({
  reducer: {
    gameOptions: gameOptionsReducer,
  },
});
