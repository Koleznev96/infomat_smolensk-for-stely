import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";

export interface CounterState {
  language: "ru" | "en";
}

const initialState: CounterState = {
  language: "ru",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<"ru" | "en">) => {
      state.language = action.payload;
    },
  },
});

export const { updateLanguage } = mainSlice.actions;

export default mainSlice.reducer;
