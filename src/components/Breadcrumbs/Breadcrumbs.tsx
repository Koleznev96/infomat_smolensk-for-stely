import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";

import {
  CALENDAR_EVENT,
  SUGGEST_VISIT,
  TOURIST_OBJECTS,
  TOURIST_ROUTES,
} from "src/conts/routes";
import {
  useGetCategoryIdQuery,
  useGetEventsIdQuery,
  useGetPlaceIdQuery,
  useGetPlacesSubcategoryQuery,
  useGetRoutesIdQuery,
} from "src/api/main";

import { ReactComponent as HomeIcon } from "src/icons/home.svg";

import styles from "./Breadcrumbs.module.scss";

const BreadcrumbsRoute = ({ match }: any) => {
  const { data: response } = useGetRoutesIdQuery(match.params.id);

  return <>{response?.data?.title}</>;
};

const BreadcrumbsPlace = ({ match }: any) => {
  const { data: response } = useGetPlaceIdQuery(match.params.entityId);

  return <>{response?.data?.title}</>;
};

const BreadcrumbsObject = ({ match }: any) => {
  const { data: response } = useGetCategoryIdQuery(
    match.params.categoryId.split("-")[0],
  );

  return <>{response?.data?.title}</>;
};

const BreadcrumbsSubCategory = ({ match }: any) => {
  const { data: response } = useGetPlacesSubcategoryQuery(match.params.id);

  return <>{response?.rows?.[0]?.subcategory?.title}</>;
};

const BreadcrumbsEvent = ({ match }: any) => {
  const { data: response } = useGetEventsIdQuery(match.params.entityId);

  return <>{response?.data?.title}</>;
};

const Home = () => <HomeIcon />;

const routes = [
  { path: "/", breadcrumb: Home },
  { path: TOURIST_OBJECTS, breadcrumb: "Туристические объекты" },
  { path: `/${TOURIST_OBJECTS}/:id`, breadcrumb: BreadcrumbsSubCategory },
  { path: `/${TOURIST_OBJECTS}/:id/:entityId`, breadcrumb: BreadcrumbsPlace },
  {
    path: `/${TOURIST_OBJECTS}/:categoryId-category`,
    breadcrumb: BreadcrumbsObject,
  },
  {
    path: `/${TOURIST_OBJECTS}/:categoryId-category/:id`,
    breadcrumb: BreadcrumbsSubCategory,
  },
  {
    path: `/${TOURIST_OBJECTS}/:categoryId-category/:id/:entityId`,
    breadcrumb: BreadcrumbsPlace,
  },
  { path: TOURIST_ROUTES, breadcrumb: "Туристические маршруты" },
  { path: `/${TOURIST_ROUTES}/:id`, breadcrumb: BreadcrumbsRoute },
  { path: `/${TOURIST_ROUTES}/:id/:entityId`, breadcrumb: BreadcrumbsPlace },
  { path: `/${SUGGEST_VISIT}`, breadcrumb: "Рекомендуем" },
  { path: `/${SUGGEST_VISIT}/:entityId`, breadcrumb: BreadcrumbsPlace },
  { path: CALENDAR_EVENT, breadcrumb: "Календарь мероприятий" },
  { path: `/${CALENDAR_EVENT}/:entityId`, breadcrumb: BreadcrumbsEvent },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className={styles.breadcrumb} key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
          <span>{match && index < breadcrumbs.length - 1 && ">"}</span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
