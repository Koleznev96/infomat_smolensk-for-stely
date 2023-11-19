type numOrStr = number | string;

export const TOURIST_OBJECTS = "/tourist-objects";
export const TOURIST_OBJECTS_ID = (id: number) => `/tourist-objects/${id}`;
export const TOURIST_OBJECTS_ID_ENTITY = (id: number, entityId: number) =>
  `/tourist-objects/${id}/${entityId}`;
export const TOURIST_OBJECTS_CATEGORY = "/tourist-objects/category";
export const TOURIST_OBJECTS_CATEGORY_ID = (id: number) =>
  `/tourist-objects/category/${id}`;
export const TOURIST_OBJECTS_CATEGORY_ID_ENTITY = (
  id: number,
  entityId: number,
) => `/tourist-objects/category/${id}/${entityId}`;

// TOURIST_ROUTES
export const TOURIST_ROUTES = "/tourist-routes";
export const TOURIST_ROUTES_ID = (id: numOrStr) => `/tourist-routes/${id}`;
export const TOURIST_ROUTES_ID_VIEW = (id: numOrStr, entityId: numOrStr) =>
  `/tourist-routes/${id}/${entityId}`;

// SUGGEST_VISIT
export const SUGGEST_VISIT = "/suggest-visit";
export const SUGGEST_VISIT_ID = (id: number) => `/suggest-visit/${id}`;

// CALENDAR_EVENTS
export const CALENDAR_EVENT = "/calendar-event";
export const CALENDAR_EVENT_ID = (id: number) => `/calendar-event/${id}`;
