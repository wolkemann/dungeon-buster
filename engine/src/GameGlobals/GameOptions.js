import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameScreen: "TitleScreen",
};

export const gameOptionsSlice = createSlice({
  name: "gameOptions",
  initialState,
  reducers: {
    setGameScreen: (state, { payload }) => {
      state.gameScreen = payload;
    },
  },
});

export const { setGameScreen, setGameMode } = gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
