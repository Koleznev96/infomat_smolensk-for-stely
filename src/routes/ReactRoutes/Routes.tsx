import React, { useEffect } from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  CalendarCard,
  CalendarEvents,
  MainContent,
  Subject,
  SuggestVisit,
  TouristObjects,
  TouristRoute,
  TouristRoutes,
  SuggestCard,
  Category,
  WithoutCategory,
  CategoryId,
  WithoutCategoryEntity,
  CategoryEntityId,
} from "src/routes";

import { resetMap } from "src/store/slices";
import { useAppDispatch, useAppSelector } from "src/hooks";

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";

import { Button, ChangedBlock, Header, Map, Breadcrumbs } from "src/components";

const ReactRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.main.language);

  const HeaderLayout = (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );

  const ContentLayout = (
    <>
      <Breadcrumbs />
      <Map />
      <ChangedBlock>
        <Outlet />
      </ChangedBlock>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "375px",
        }}
      >
        <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </div>
    </>
  );

  useEffect(() => {
    dispatch(resetMap());
  }, [dispatch, location.pathname]);

  return (
    <YMaps
      query={{
        apikey: "f89a7ec4-649c-4e9e-b286-86fd506b69bb",
        lang: language,
      }}
    >
      <Routes>
        <Route path="/" element={HeaderLayout}>
          <Route path="/" element={<MainContent />} />
          <Route path={TOURIST_OBJECTS} element={ContentLayout}>
            <Route path={TOURIST_OBJECTS} element={<TouristObjects />} />
            <Route path=":id" element={<WithoutCategory />} />
            <Route path=":id/:entityId" element={<WithoutCategoryEntity />} />
            <Route path=":categoryId-category" element={<Category />} />
            <Route path=":categoryId-category/:id" element={<CategoryId />} />
            <Route
              path=":categoryId-category/:id/:entityId"
              element={<CategoryEntityId />}
            />
          </Route>
          <Route path={TOURIST_ROUTES} element={ContentLayout}>
            <Route path={TOURIST_ROUTES} element={<TouristRoutes />} />
            <Route path=":id" element={<TouristRoute />} />
            <Route path=":id/:entityId" element={<Subject />} />
          </Route>
          <Route path={SUGGEST_VISIT} element={ContentLayout}>
            <Route path={SUGGEST_VISIT} element={<SuggestVisit />} />
            <Route path=":entityId" element={<SuggestCard />} />
          </Route>
          <Route path={CALENDAR_EVENT} element={ContentLayout}>
            <Route path={CALENDAR_EVENT} element={<CalendarEvents />} />
            <Route path=":entityId" element={<CalendarCard />} />
          </Route>
        </Route>
      </Routes>
    </YMaps>
  );
};

export default ReactRoutes;
