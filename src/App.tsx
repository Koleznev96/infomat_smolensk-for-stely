import React from "react";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";

import {
  CalendarEvents,
  SuggestVisit,
  TouristObjects,
  TouristRoutes,
  MainContent,
} from "src/routes";

import { Header, TouristRoute, Subject, Map, ChangedBlock } from "./components";

function App() {
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
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HeaderLayout}>
          <Route path="/" element={<MainContent />} />
          <Route path={TOURIST_OBJECTS} element={ContentLayout}>
            <Route path={TOURIST_OBJECTS} element={<TouristObjects />} />
          </Route>
          <Route path={TOURIST_ROUTES} element={ContentLayout}>
            <Route path={TOURIST_ROUTES} element={<TouristRoutes />} />
            <Route path=":id" element={<TouristRoute />} />
            <Route path=":id/:entityId" element={<Subject />} />
          </Route>
          <Route path={SUGGEST_VISIT} element={ContentLayout}>
            <Route path={SUGGEST_VISIT} element={<SuggestVisit />} />
          </Route>
          <Route path={CALENDAR_EVENT} element={ContentLayout}>
            <Route path={CALENDAR_EVENT} element={<CalendarEvents />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
