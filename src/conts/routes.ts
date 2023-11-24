type numOrStr = number | string | undefined;

export const TOURIST_OBJECTS = "/tourist-objects";

export const TOURIST_OBJECTS_ID = (id: numOrStr) => `/tourist-objects/${id}`;

export const TOURIST_OBJECTS_ID_ENTITY = (id: numOrStr, entityId: numOrStr) =>
  `/tourist-objects/${id}/${entityId}`;

export const TOURIST_OBJECTS_CATEGORY = (categoryId: numOrStr) =>
  `/tourist-objects/${categoryId}-category`;

export const TOURIST_OBJECTS_CATEGORY_ID = (
  categoryId: numOrStr,
  id: numOrStr,
) => `/tourist-objects/${categoryId}-category/${id}`;

export const TOURIST_OBJECTS_CATEGORY_ID_ENTITY = (
  categoryId: numOrStr,
  id: numOrStr,
  entityId: numOrStr,
) => `/tourist-objects/${categoryId}-category/${id}/${entityId}`;

// TOURIST_ROUTES
export const TOURIST_ROUTES = "/tourist-routes";
export const TOURIST_ROUTES_ID = (id: numOrStr) => `/tourist-routes/${id}`;
export const TOURIST_ROUTES_ID_VIEW = (id: numOrStr, entityId: numOrStr) =>
  `/tourist-routes/${id}/${entityId}`;

// SUGGEST_VISIT
export const SUGGEST_VISIT = "/suggest-visit";
export const SUGGEST_VISIT_ID = (id: numOrStr) => `/suggest-visit/${id}`;

// CALENDAR_EVENTS
export const CALENDAR_EVENT = "/calendar-event";
export const CALENDAR_EVENT_ID = (id: numOrStr) => `/calendar-event/${id}`;
