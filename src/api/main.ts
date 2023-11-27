import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ApiPageEventShortOut,
  ApiPagePlaceCategoryOut,
  ApiPagePlaceShortOut,
  ApiPageRouteShortOut,
  ApiResponseEventOut,
  ApiResponseGeneralOut,
  ApiResponsePlaceCategoryOut,
  ApiResponsePlaceOut,
  ApiResponseRouteOut,
  GeneralOut,
} from "src/api/myApi";

// Получаем текущий URL
const currentUrl = window.location.href;

// Обрабатываем текущий URL, чтобы получить основной URL
const parsedUrl = new URL(currentUrl);
const baseUrl = parsedUrl.origin;

const isDev =
  baseUrl === "http://localhost:3000" ? "http://smolenskis.site/api" : baseUrl;

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDev,
  }),
  endpoints: (builder) => ({
    getRoutes: builder.query<ApiPageRouteShortOut, undefined>({
      query: () => "routes",
    }),
    getRoutesId: builder.query<ApiResponseRouteOut, string>({
      query: (id: string) => `routes/${id}`,
    }),
    getPlaces: builder.query<
      ApiPagePlaceShortOut,
      undefined | { search: string }
    >({
      query: (query: { search: string }) =>
        query?.search
          ? `places?status=PUBLISHED&search=${query.search}`
          : "places?status=PUBLISHED",
    }),
    getPlaceId: builder.query<ApiResponsePlaceOut, string>({
      query: (id: string) => `places/${id}`,
    }),
    getPlacesSubcategory: builder.query<ApiPagePlaceShortOut, string>({
      query: (subId: string) =>
        `places?status=PUBLISHED&subcategoryId=${subId}`,
    }),
    getSuggestPlaces: builder.query<ApiPagePlaceShortOut, undefined>({
      query: () => "places?status=PUBLISHED&recommendedOnly=true",
    }),
    getEvents: builder.query<
      ApiPageEventShortOut,
      undefined | { search: string }
    >({
      query: (query: { search: string }) =>
        query?.search
          ? `events?status=PUBLISHED&search=${query.search}`
          : "events?status=PUBLISHED",
    }),
    getEventsId: builder.query<ApiResponseEventOut, string>({
      query: (id: string) => `events/${id}`,
    }),
    getCategories: builder.query<ApiPagePlaceCategoryOut, undefined>({
      query: () => "categories",
    }),
    getCategoryId: builder.query<ApiResponsePlaceCategoryOut, string>({
      query: (id: string) => `categories/${id}`,
    }),
    getGeneral: builder.query<ApiResponseGeneralOut, undefined>({
      query: () => "general",
    }),
    getWeather: builder.query<any, undefined>({
      query: () => "weather",
    }),
  }),
});

export const {
  useGetPlacesQuery,
  useLazyGetPlacesQuery,
  useGetPlaceIdQuery,
  useGetCategoriesQuery,
  useGetCategoryIdQuery,
  useGetEventsIdQuery,
  useGetEventsQuery,
  useLazyGetEventsQuery,
  useGetGeneralQuery,
  useGetPlacesSubcategoryQuery,
  useGetSuggestPlacesQuery,
  useGetRoutesQuery,
  useGetRoutesIdQuery,
  useGetWeatherQuery,
} = mainApi;
