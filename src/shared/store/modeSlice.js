import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "dark",
  },
  reducers: {
    lightTheme: (state, action) => {
      window.localStorage.setItem("mode", "light");
      state.mode = "light";
    },
    darkTheme: (state, action) => {
      window.localStorage.setItem("mode", "dark");
      state.mode = "dark";
    },
  },
});

export const { lightTheme, darkTheme } = modeSlice.actions;

export default modeSlice.reducer;
