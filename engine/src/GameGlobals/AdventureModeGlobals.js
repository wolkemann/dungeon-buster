import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {},
  locations: [{ location: "", scenarios: [], currentScenario: 0 }],
  systemWindowOpen: false,
};

export const adventureModeSlice = createSlice({
  name: "adventureMode",
  initialState,
  reducers: {
    initializeAdventure: (state, { payload }) => {
      state.hero = payload.hero;
    },
    toggleSystemWindow: (state) => {
      state.systemWindowOpen = !state.systemWindowOpen;
    },
  },
});

export const { initializeAdventure, toggleSystemWindow } =
  adventureModeSlice.actions;

export default adventureModeSlice.reducer;
