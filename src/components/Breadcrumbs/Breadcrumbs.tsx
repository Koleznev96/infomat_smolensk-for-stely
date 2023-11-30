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
import { useLanguageControl } from "src/hooks";

import { ReactComponent as HomeIcon } from "src/icons/home.svg";

import styles from "./Breadcrumbs.module.scss";

const BreadcrumbsRoute = ({ match }: any) => {
  const { data: response } = useGetRoutesIdQuery(match.params.id);
  const languageControl = useLanguageControl();

  return <>{languageControl(response?.data?.title, response?.data?.titleEn)}</>;
};

const BreadcrumbsPlace = ({ match }: any) => {
  const { data: response } = useGetPlaceIdQuery(match.params.entityId);
  const languageControl = useLanguageControl();

  return <>{languageControl(response?.data?.title, response?.data?.titleEn)}</>;
};

const BreadcrumbsObject = ({ match }: any) => {
  const { data: response } = useGetCategoryIdQuery(
    match.params.categoryId.split("-")[0],
  );
  const languageControl = useLanguageControl();

  return <>{languageControl(response?.data?.title, response?.data?.titleEn)}</>;
};

const BreadcrumbsSubCategory = ({ match }: any) => {
  const { data: response } = useGetPlacesSubcategoryQuery(match.params.id);
  const languageControl = useLanguageControl();

  return (
    <>
      {languageControl(
        response?.rows?.[0]?.subcategory?.title,
        response?.rows?.[0]?.subcategory?.titleEn,
      )}
    </>
  );
};

const BreadcrumbsEvent = ({ match }: any) => {
  const { data: response } = useGetEventsIdQuery(match.params.entityId);
  const languageControl = useLanguageControl();

  return <>{languageControl(response?.data?.title, response?.data?.titleEn)}</>;
};

const Home = () => <HomeIcon />;

const routes = (lang: (ru: string, en: string) => string) => [
  { path: "/", breadcrumb: Home },
  {
    path: TOURIST_OBJECTS,
    breadcrumb: lang(
      "Туристские объекты",
      "Tourist objects on the map of the city",
    ),
  },
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
  {
    path: TOURIST_ROUTES,
    breadcrumb: lang("Туристские маршруты", "Tourist routes"),
  },
  { path: `/${TOURIST_ROUTES}/:id`, breadcrumb: BreadcrumbsRoute },
  { path: `/${TOURIST_ROUTES}/:id/:entityId`, breadcrumb: BreadcrumbsPlace },
  {
    path: `/${SUGGEST_VISIT}`,
    breadcrumb: lang("Рекомендуем", "Suggest visit"),
  },
  { path: `/${SUGGEST_VISIT}/:entityId`, breadcrumb: BreadcrumbsPlace },
  { path: CALENDAR_EVENT, breadcrumb: lang("Календарь", "Calendar") },
  { path: `/${CALENDAR_EVENT}/:entityId`, breadcrumb: BreadcrumbsEvent },
];

const Breadcrumbs = () => {
  const languageControl = useLanguageControl();
  const breadcrumbs = useBreadcrumbs(routes(languageControl));

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
