import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  EventOut,
  PlaceOut,
  PlaceShortOut,
  RouteOut,
  RouteShortOut,
} from "src/api/myApi";

type MapType = "route" | "place-mark" | "route-placemark" | "placemark-event";

type PlaceMarkEvent = Omit<Places, "url" | "colorText" | "backgroundColor">;

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

interface RoutesWithPlacemark extends Routes {
  text: string;
  url: string;
}

interface MainState {
  language: "ru_RU" | "en_US";
  map: {
    center: number[];
    type: MapType;
    placeMarksType: Places[];
    placeMarksEvent: PlaceMarkEvent[];
    routes: Routes[];
    routeWithPlacemark: RoutesWithPlacemark[];
    currentPlacemarkIndex?: number;
  };
}

const initialState: MainState = {
  language: "ru_RU",
  map: {
    center: [54.782635, 32.045287],
    type: "place-mark",
    placeMarksType: [],
    placeMarksEvent: [],
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
        text:
          state.language === "ru_RU"
            ? row?.title || ""
            : row?.titleEn || row?.title || "",
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
    updatePlaceMarksEvent: (
      state,
      action: PayloadAction<{ marks: EventOut[]; center: PlaceShortOut }>,
    ) => {
      state.map.type = "placemark-event";

      state.map.placeMarksEvent = action.payload.marks?.map((row) => ({
        cords: [row?.address?.latitude || 0, row?.address?.longitude || 0],
        text:
          state.language === "ru_RU"
            ? row?.title || ""
            : row?.titleEn || row?.title || "",
      }));

      state.map.center = [
        action?.payload?.center?.address?.latitude || 0,
        action?.payload?.center?.address?.longitude || 0,
      ];
    },
    updateRoutesAndCenter: (
      state,
      action: PayloadAction<{
        routes: RouteShortOut[];
        center: PlaceShortOut & RouteOut;
      }>,
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

      const locationLatitude =
        action?.payload?.center?.stops?.[0]?.place?.address?.latitude ??
        action.payload.center.address?.latitude;

      const locationLongitude =
        action?.payload?.center?.stops?.[0]?.place?.address?.longitude ??
        action.payload.center.address?.longitude;

      state.map.center = [locationLatitude || 0, locationLongitude || 0];
    },
    updateRoutesWithPlaceAndCenter: (
      state,
      action: PayloadAction<{
        routes: RouteShortOut[];
        center: RouteOut & PlaceShortOut;
      }>,
    ) => {
      state.map.type = "route-placemark";

      state.map.routeWithPlacemark = action.payload.routes?.map((route) => ({
        cords:
          route?.stops?.map((stop) => [
            stop.place?.address?.latitude || 0,
            stop.place?.address?.longitude || 0,
          ]) || [],
        text:
          route.stops?.[state.map.currentPlacemarkIndex || 0]?.place?.title ||
          "",
        url: route.icon?.url || "",
        lineColor: route.routeColor || "",
      }));

      const locationLatitude =
        action?.payload?.center?.stops?.[state.map.currentPlacemarkIndex || 0]
          ?.place?.address?.latitude ?? action.payload.center.address?.latitude;

      const locationLongitude =
        action?.payload?.center?.stops?.[state.map.currentPlacemarkIndex || 0]
          ?.place?.address?.longitude ??
        action.payload.center.address?.longitude;

      state.map.center = [locationLatitude || 0, locationLongitude || 0];
    },
    updateCurrentIndexRoutePlacemark: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.map.currentPlacemarkIndex = action.payload;
    },
    panTo: (state, action: PayloadAction<RouteOut & PlaceShortOut>) => {
      const locationLatitude =
        action?.payload?.stops?.[state.map.currentPlacemarkIndex || 0]?.place
          ?.address?.latitude ?? action.payload?.address?.latitude;

      const locationLongitude =
        action?.payload?.stops?.[state.map.currentPlacemarkIndex || 0]?.place
          ?.address?.longitude ?? action.payload?.address?.longitude;

      state.map.center = [locationLatitude || 0, locationLongitude || 0];
    },
  },
});

export const {
  panTo,
  updateLanguage,
  updateRoutesAndCenter,
  updatePlaceMarksEvent,
  updatePlaceMarksAndCenter,
  updateRoutesWithPlaceAndCenter,
  updateCurrentIndexRoutePlacemark,
} = mainSlice.actions;

export default mainSlice.reducer;
