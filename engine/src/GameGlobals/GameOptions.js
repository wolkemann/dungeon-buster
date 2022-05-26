import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameScreen: "TitleScreen",
  gameMode: null,
};

export const gameOptionsSlice = createSlice({
  name: "gameOptions",
  initialState,
  reducers: {
    setGameScreen: (state, { payload }) => {
      state.gameScreen = payload;
    },
    setGameMode: (state, { payload }) => {
      state.gameMode = payload;
    },
  },
});

export const { setGameScreen, setGameMode } = gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
