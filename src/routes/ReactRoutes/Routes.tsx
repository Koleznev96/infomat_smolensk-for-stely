import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

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

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";

import { Button, ChangedBlock, Header, Map } from "src/components";

const ReactRoutes = () => {
  const navigate = useNavigate();

  const HeaderLayout = (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );

  const ContentLayout = (
    <>
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

  return (
    <Routes>
      <Route path="/" element={HeaderLayout}>
        <Route path="/" element={<MainContent />} />
        <Route path={TOURIST_OBJECTS} element={ContentLayout}>
          <Route path={TOURIST_OBJECTS} element={<TouristObjects />} />
          <Route path=":id" element={<WithoutCategory />} />
          <Route path=":id/:entityId" element={<WithoutCategoryEntity />} />
          <Route path="category" element={<Category />} />
          <Route path="category/:id" element={<CategoryId />} />
          <Route path="category/:id/:entityId" element={<CategoryEntityId />} />
        </Route>
        <Route path={TOURIST_ROUTES} element={ContentLayout}>
          <Route path={TOURIST_ROUTES} element={<TouristRoutes />} />
          <Route path=":id" element={<TouristRoute />} />
          <Route path=":id/:entityId" element={<Subject />} />
        </Route>
        <Route path={SUGGEST_VISIT} element={ContentLayout}>
          <Route path={SUGGEST_VISIT} element={<SuggestVisit />} />
          <Route path=":id" element={<SuggestCard />} />
        </Route>
        <Route path={CALENDAR_EVENT} element={ContentLayout}>
          <Route path={CALENDAR_EVENT} element={<CalendarEvents />} />
          <Route path=":id" element={<CalendarCard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ReactRoutes;
