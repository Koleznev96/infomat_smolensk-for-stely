import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PlaceOut, PlaceShortOut, RouteShortOut } from "src/api/myApi";

type MapType = "route" | "place-mark";

interface Places {
  cords: number[];
  url: string;
  text: string;
  colorText: string;
  backgroundColor: string;
}

interface Routes {
  cords: Array<number[]>;
  lineColor: string;
}

interface MainState {
  language: "ru_RU" | "en_US";
  map: {
    center: number[];
    type: MapType;
    placeMarksType: Places[];
    routes: Routes[];
  };
}

const initialState: MainState = {
  language: "ru_RU",
  map: {
    center: [54.782635, 32.045287],
    type: "place-mark",
    placeMarksType: [],
    routes: [],
  },
};

type Place = PlaceShortOut & PlaceOut;

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<"ru_RU" | "en_US">) => {
      state.language = action.payload;
    },
    updatePlaceMarksAndCenter: (
      state,
      action: PayloadAction<{ marks: Place[]; center: PlaceShortOut }>,
    ) => {
      state.map.type = "place-mark";

      state.map.placeMarksType = action.payload.marks?.map((row) => ({
        cords: [row?.address?.latitude || 0, row?.address?.longitude || 0],
        text: row?.title || "",
        url: row?.subcategory?.icon?.url || "",
        colorText: "",
        backgroundColor:
          row.subcategory?.backgroundColor ||
          row?.subcategory?.category?.backgroundColor ||
          "",
      }));

      state.map.center = [
        action?.payload?.center?.address?.latitude || 0,
        action?.payload?.center?.address?.longitude || 0,
      ];
    },
    updateRoutesAndCenter: (
      state,
      action: PayloadAction<{ routes: RouteShortOut[]; center: PlaceShortOut }>,
    ) => {
      state.map.type = "route";

      state.map.routes = action.payload.routes?.map((route) => ({
        cords:
          route?.stops?.map((stop) => [
            stop.place?.address?.latitude || 0,
            stop.place?.address?.longitude || 0,
          ]) || [],
        lineColor: route.routeColor || "",
      }));

      state.map.center = [
        action?.payload?.center?.address?.latitude || 0,
        action?.payload?.center?.address?.longitude || 0,
      ];
    },
    resetMap: (state) => {
      state.map = initialState.map;
    },
  },
});

export const {
  updateLanguage,
  updatePlaceMarksAndCenter,
  updateRoutesAndCenter,
  resetMap,
} = mainSlice.actions;

export default mainSlice.reducer;
