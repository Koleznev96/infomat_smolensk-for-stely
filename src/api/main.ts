import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ApiPageEventShortOut,
  ApiPagePlaceCategoryOut,
  ApiPagePlaceShortOut,
  ApiPageRouteShortOut,
  ApiResponseEventOut,
  ApiResponsePlaceCategoryOut,
  ApiResponsePlaceOut,
  ApiResponseRouteOut,
} from "src/api/myApi";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL_API,
  }),
  endpoints: (builder) => ({
    getRoutes: builder.query<ApiPageRouteShortOut, undefined>({
      query: () => "routes",
    }),
    getRoutesId: builder.query<ApiResponseRouteOut, string>({
      query: (id: string) => `routes/${id}`,
    }),
    getPlaces: builder.query<ApiPagePlaceShortOut, undefined>({
      query: () => "places?status=PUBLISHED",
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
    getEvents: builder.query<ApiPageEventShortOut, undefined>({
      query: () => "events",
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
    getGeneral: builder.query<ApiPagePlaceShortOut, undefined>({
      query: () => "general",
    }),
  }),
});

export const {
  useGetPlacesQuery,
  useGetPlaceIdQuery,
  useGetCategoriesQuery,
  useGetCategoryIdQuery,
  useGetEventsIdQuery,
  useGetEventsQuery,
  useGetGeneralQuery,
  useGetPlacesSubcategoryQuery,
  useGetSuggestPlacesQuery,
  useGetRoutesQuery,
  useGetRoutesIdQuery,
} = mainApi;
