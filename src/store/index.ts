import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "src/api/main";

import mainSlice from "src/store/slices";

export const index = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    main: mainSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
