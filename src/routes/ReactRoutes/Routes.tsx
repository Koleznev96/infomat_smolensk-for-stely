import React, { useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";

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

import { useLanguageControl } from "src/hooks";

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";

import { Button, ChangedBlock, Header, Map, Breadcrumbs } from "src/components";
import { useGetGeneralQuery } from "src/api/main";

const ReactRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idle = useIdleTimer({
    timeout: 1000 * 60 * 3,
    onIdle: () => {
      navigate("/");
      // @ts-ignore
      window.ym(95698781, "reachGoal", "new-session");
    },
  });

  const languageControl = useLanguageControl();

  const { data: response } = useGetGeneralQuery(undefined);

  useEffect(() => {
    if (response?.data?.yandexMetricCode) {
      // @ts-ignore
      window.ym(response?.data?.yandexMetricCode, "hit", window.location.href);
    }
  }, [location.pathname, response?.data?.yandexMetricCode]);

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
        <Button onClick={() => navigate("/")}>
          {languageControl("Вернуться на главную", "Home")}
        </Button>
        <Button onClick={() => navigate(-1)}>
          {languageControl("Назад", "Back")}
        </Button>
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
  );
};

export default ReactRoutes;
