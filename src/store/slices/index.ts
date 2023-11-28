import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PlaceOut, PlaceShortOut, RouteShortOut } from "src/api/myApi";

type MapType = "route" | "place-mark" | "route-placemark";

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
    routeWithPlacemark: Routes[];
    currentPlacemarkIndex?: number;
  };
}

const initialState: MainState = {
  language: "ru_RU",
  map: {
    center: [54.782635, 32.045287],
    type: "place-mark",
    placeMarksType: [],
    routeWithPlacemark: [],
    currentPlacemarkIndex: undefined,
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
    updateRoutesWithPlaceAndCenter: (
      state,
      action: PayloadAction<{ routes: RouteShortOut[]; center: PlaceShortOut }>,
    ) => {
      state.map.type = "route-placemark";

      state.map.routeWithPlacemark = action.payload.routes?.map((route) => ({
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
    updateCurrentIndexRoutePlacemark: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.map.currentPlacemarkIndex = action.payload;
    },
    resetMap: (state) => {
      state.map.routes = initialState.map.routes;
      state.map.routeWithPlacemark = initialState.map.routeWithPlacemark;
      state.map.placeMarksType = initialState.map.placeMarksType;
    },
  },
});

export const {
  updateLanguage,
  updatePlaceMarksAndCenter,
  updateRoutesWithPlaceAndCenter,
  updateCurrentIndexRoutePlacemark,
  updateRoutesAndCenter,
  resetMap,
} = mainSlice.actions;

export default mainSlice.reducer;
