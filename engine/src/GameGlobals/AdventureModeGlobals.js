import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {},
};

export const adventureModeSlice = createSlice({
  name: "adventureMode",
  initialState,
  reducers: {
    initializeAdventure: (state, { payload }) => {
      state.hero = payload.hero;
    },
  },
});

export const { initializeAdventure } = adventureModeSlice.actions;

export default adventureModeSlice.reducer;
