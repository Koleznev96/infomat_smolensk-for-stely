type numOrStr = number | string;

export const TOURIST_OBJECTS = "/tourist-objects";
export const TOURIST_ROUTES = "/tourist-routes";
export const TOURIST_ROUTES_ID = (id: numOrStr) => `/tourist-routes/${id}`;
export const TOURIST_ROUTES_ID_VIEW = (id: numOrStr, entityId: numOrStr) =>
  `/tourist-routes/${id}/${entityId}`;
export const SUGGEST_VISIT = "/suggest-visit";
export const CALENDAR_EVENT = "/calendar-event";
