import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ApiPageEventShortOut,
  ApiPagePlaceCategoryOut,
  ApiPagePlaceShortOut,
  ApiPageRouteShortOut,
  ApiPageSpecialPlaceOut,
  ApiResponseEventOut,
  ApiResponseGeneralOut,
  ApiResponsePlaceCategoryOut,
  ApiResponsePlaceOut,
  ApiResponseRouteOut,
} from "src/api/myApi";
import { YandexWeather } from "src/api/weather";

// Получаем текущий URL
const currentUrl = window.location.href;

// Обрабатываем текущий URL, чтобы получить основной URL
const parsedUrl = new URL(currentUrl);
const baseUrl = parsedUrl.origin;

const isDev =
  baseUrl === "http://localhost:3000"
    ? "http://smolenskis.site/api"
    : `${baseUrl}/api`;

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: isDev,
  }),
  endpoints: (builder) => ({
    getRoutes: builder.query<ApiPageRouteShortOut, undefined>({
      query: () => "routes?status=PUBLISHED&size=100",
    }),
    getRoutesId: builder.query<ApiResponseRouteOut, string>({
      query: (id: string) => `routes/${id}`,
    }),
    getPlaces: builder.query<
      ApiPagePlaceShortOut,
      undefined | { search?: string; page?: number }
    >({
      queryFn: async (query) => {
        if (query?.search) {
          const response = await fetch(
            `${isDev}/places?status=PUBLISHED&size=100&search=${query.search}`,
          );

          const result = await response.json();

          return { data: result };
        }

        const fetchedData: ApiPagePlaceShortOut = {
          rows: [],
          total: 0,
        };

        const fetchData = async (pageNumber: number): Promise<void> => {
          const response = await fetch(
            `${isDev}/places?status=PUBLISHED&size=100&page=${pageNumber}`,
          );

          const result: ApiPagePlaceShortOut = await response.json();

          if (result.rows) {
            fetchedData.rows = [...(fetchedData.rows || []), ...result.rows];
            fetchedData.total = result.total;
          }

          if (pageNumber < 4) {
            await fetchData(pageNumber + 1);
          }
        };

        await fetchData(query?.page || 0);

        return { data: fetchedData };
      },
    }),
    getPlaceId: builder.query<ApiResponsePlaceOut, string>({
      query: (id: string) => `places/${id}`,
    }),
    getPlacesSubcategory: builder.query<ApiPagePlaceShortOut, string>({
      query: (subId: string) =>
        `places?status=PUBLISHED&size=100&subcategoryId=${subId}`,
    }),
    getPlacesCategory: builder.query<ApiPagePlaceShortOut, string>({
      query: (subId: string) =>
        `places?status=PUBLISHED&size=100&categoryId=${subId}`,
    }),
    getSuggestPlaces: builder.query<ApiPagePlaceShortOut, undefined>({
      query: () => "places?status=PUBLISHED&size=100&recommendedOnly=true",
    }),
    getEvents: builder.query<
      ApiPageEventShortOut,
      undefined | { search: string }
    >({
      query: (query: { search: string }) =>
        query?.search
          ? `events?status=PUBLISHED&size=50&search=${query.search}`
          : "events?status=PUBLISHED&size=100",
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
    getWeather: builder.query<YandexWeather, undefined>({
      query: () => "weather",
    }),
    getSpecialPlaces: builder.query<ApiPageSpecialPlaceOut, undefined>({
      query: () => "specialPlaces",
    }),
  }),
});

export const {
  useGetPlacesQuery,
  useLazyGetPlacesQuery,
  useGetPlaceIdQuery,
  useGetPlacesCategoryQuery,
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
  useGetSpecialPlacesQuery,
} = mainApi;
