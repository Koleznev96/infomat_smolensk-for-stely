/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PlaceSubcategoryCreate {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The id of parent category
   * @format int64
   */
  categoryId: number;
}

export interface ApiResponsePlaceSubcategoryOut {
  data?: PlaceSubcategoryOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The list of an errors */
export interface ErrorRecord {
  /** Details about error */
  details?: string;
  /** Field which caused this error */
  field?: string;
}

/** The icon of place subcategory */
export interface Icon {
  /**
   * The id of image
   * @format int64
   */
  id?: number;
  /** The URL for getting icon */
  url?: string;
}

/** The parent category */
export interface PlaceCategoryShortOut {
  /**
   * The id of place category
   * @format int64
   */
  id?: number;
  /** The title of place category in Russian */
  title?: string;
  /** The title of place category in English */
  titleEn?: string;
  /** The background color of place category */
  backgroundColor?: string;
  /** The main color of place category */
  color?: string;
  icon?: Icon;
}

/** The requested data */
export interface PlaceSubcategoryOut {
  /**
   * The id of place subcategory
   * @format int64
   */
  id?: number;
  /** The title of place subcategory in Russian */
  title?: string;
  /** The title of place subcategory in English */
  titleEn?: string;
  category?: PlaceCategoryShortOut;
  icon?: Icon;
}

/** The address of special place */
export interface AddressIn {
  /** The text address in Russian */
  address: string;
  /** The text address in English */
  addressEn?: string;
  /**
   * The latitude of address
   * @format double
   * @min -90
   * @max 90
   */
  latitude: number;
  /**
   * The longitude of address
   * @format double
   * @min -180
   * @max 180
   */
  longitude: number;
}

export interface SpecialPlaceCreate {
  /** The type of place */
  type: string;
  /**
   * The background color of special place
   * @minLength 7
   * @maxLength 7
   * @pattern #[0-9a-fA-F]{6}
   */
  backgroundColor: string;
  address: AddressIn;
}

/** The address of special place */
export interface AddressOut {
  /**
   * The id of address
   * @format int64
   */
  id?: number;
  /** The text address in Russian */
  address?: string;
  /** The text address in English */
  addressEn?: string;
  /**
   * The latitude of address
   * @format double
   */
  latitude?: number;
  /**
   * The longitude of address
   * @format double
   */
  longitude?: number;
}

export interface ApiResponseSpecialPlaceOut {
  data?: SpecialPlaceOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The requested data */
export interface SpecialPlaceOut {
  /**
   * The id of special place
   * @format int64
   */
  id?: number;
  /** The type of special place */
  type?: "WC" | "PHOTO_ZONE";
  address?: AddressOut;
  /** The background color of special place */
  backgroundColor?: string;
  icon?: Icon;
}

export interface RouteCreate {
  /** The status of route */
  status: string;
  /**
   * The background color of route
   * @pattern #[0-9a-fA-F]{6}
   */
  backgroundColor: string;
  /**
   * The color of route
   * @pattern #[0-9a-fA-F]{6}
   */
  routeColor: string;
  /**
   * The title of route in Russian
   * @minLength 1
   * @maxLength 127
   */
  title: string;
  /**
   * The title of route in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The length of route in Russian
   * @minLength 1
   * @maxLength 31
   */
  length: string;
  /**
   * The length of route in English
   * @minLength 1
   * @maxLength 31
   */
  lengthEn?: string;
  /**
   * The duration of route in Russian
   * @minLength 1
   * @maxLength 31
   */
  duration: string;
  /**
   * The duration of route in English
   * @minLength 1
   * @maxLength 31
   */
  durationEn?: string;
  /**
   * The type of route in Russian
   * @minLength 1
   * @maxLength 63
   */
  type: string;
  /**
   * The type of route in English
   * @minLength 1
   * @maxLength 63
   */
  typeEn?: string;
  /**
   * The description of route in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description of route in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  /**
   * The stops of route
   * @maxItems 127
   * @minItems 1
   */
  stops?: StopIn[];
}

/** The stops of route */
export interface StopIn {
  /**
   * The id of place
   * @format int64
   */
  placeId?: number;
  address?: AddressIn;
  /**
   * The sequence number of stop in route
   * @format byte
   */
  sequenceNumber: string;
}

export interface ApiResponseRouteOut {
  data?: RouteOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The cover of place */
export interface Image {
  /**
   * The id of image
   * @format int64
   */
  id?: number;
  /** The URL for getting original image */
  urlOriginal?: string;
  /** The URL for getting original 3x2 cropped image */
  url3x2Original?: string;
  /** The URL for getting 3x2 cropped and resized image */
  url3x2?: string;
}

/** The requested data */
export interface RouteOut {
  /**
   * The id of route
   * @format int64
   */
  id?: number;
  /** The status of route */
  status?: "DRAFT" | "PUBLISHED";
  /** The background color of route */
  backgroundColor?: string;
  icon?: Icon;
  /** The color of route */
  routeColor?: string;
  /** The title of route in Russian */
  title?: string;
  /** The title of route in English */
  titleEn?: string;
  /** The length of route in Russian */
  length?: string;
  /** The length of route in English */
  lengthEn?: string;
  /** The duration of route in Russian */
  duration?: string;
  /** The duration of route in English */
  durationEn?: string;
  /** The type of route in Russian */
  type?: string;
  /** The type of route in English */
  typeEn?: string;
  /** The description of route in Russian */
  description?: string;
  /** The description of route in English */
  descriptionEn?: string;
  /**
   * The list of stops of route
   * The stops are sorted by sequence number
   */
  stops?: StopOut[];
}

/**
 * The list of stops of route
 * The stops are sorted by sequence number
 */
export interface StopOut {
  /**
   * The id of stop
   * @format int64
   */
  id?: number;
  place?: StopPlace;
  address?: AddressOut;
  /**
   * The sequence number of stop
   * @format byte
   */
  sequenceNumber?: string;
}

/** The place related to that stop (mutual exclusion with address) */
export interface StopPlace {
  /**
   * The id of place
   * @format int64
   */
  id?: number;
  /** The title of place in Russian */
  title?: string;
  /** The title of place in English */
  titleEn?: string;
  cover?: Image;
  address?: AddressOut;
  /** The status of place */
  status?: "DRAFT" | "PUBLISHED";
}

/** The frame which describes coordinates and size for cropping cover */
export interface Frame {
  /** The name of part where image is located */
  partName: string;
  /**
   * The x-coordinate of the top-left corner
   * @format int32
   */
  x: number;
  /**
   * The y-coordinate of the top-left corner
   * @format int32
   */
  y: number;
  /**
   * The width for cropping
   * @format int32
   */
  width: number;
  /**
   * The height for cropping
   * @format int32
   */
  height: number;
}

export interface PlaceCreate {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /** The status of place */
  status: string;
  /** Is recommended or not */
  recommended?: boolean;
  /**
   * The id of subcategory
   * @format int64
   */
  subcategoryId: number;
  /**
   * The phone of place
   * @minLength 1
   * @maxLength 63
   */
  phone?: string;
  /**
   * The email of place
   * @minLength 1
   * @maxLength 63
   */
  email?: string;
  /**
   * The website of place
   * @minLength 1
   * @maxLength 63
   */
  website?: string;
  /**
   * The link for QR code of place
   * @minLength 1
   * @maxLength 63
   */
  linkForQrCode?: string;
  /**
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  address: AddressIn;
  /**
   * The working hours of place in Russian
   * @minLength 1
   * @maxLength 63
   */
  workingHours?: string;
  /**
   * The working hours of place in English
   * @minLength 1
   * @maxLength 63
   */
  workingHoursEn?: string;
  /** The list of frames. Each frame describes coordinates and size for cropping respective image */
  frames?: Frame[];
  coverFrame: Frame;
}

export interface ApiResponsePlaceOut {
  data?: PlaceOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The requested data */
export interface PlaceOut {
  /**
   * The id of place
   * @format int64
   */
  id?: number;
  /** The title of place in Russian */
  title?: string;
  /** The title of place in English */
  titleEn?: string;
  /** The status of place */
  status?: "DRAFT" | "PUBLISHED";
  /** The recommended flag of place */
  recommended?: boolean;
  cover?: Image;
  /** The photos of place */
  photos?: Image[];
  subcategory?: PlaceSubcategoryOut;
  /** The phone of place */
  phone?: string;
  /** The email of place */
  email?: string;
  /** The website of place */
  website?: string;
  /** The link for QR code of place */
  linkForQrCode?: string;
  /** The description of place in Russian */
  description?: string;
  /** The description of place in English */
  descriptionEn?: string;
  address?: AddressOut;
  /** The working hours of place in Russian */
  workingHours?: string;
  /** The working hours of place in English */
  workingHoursEn?: string;
}

export interface EventCreate {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /** The status of event */
  status: string;
  /**
   * The start date of event
   * @format date
   */
  startDate: string;
  /**
   * The end date of event
   * @format date
   */
  endDate?: string;
  /** @example "04:47" */
  startTime: string;
  /** @example "04:47" */
  endTime?: string;
  /**
   * The phone of event
   * @minLength 1
   * @maxLength 63
   */
  phone?: string;
  /**
   * The email of event
   * @minLength 1
   * @maxLength 63
   */
  email?: string;
  /**
   * The website of event
   * @minLength 1
   * @maxLength 63
   */
  website?: string;
  /**
   * The link for QR code of event
   * @minLength 1
   * @maxLength 63
   */
  linkForQrCode?: string;
  /**
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  address: AddressIn;
  /** The list of frames. Each frame describes coordinates and size for cropping respective image */
  frames?: Frame[];
  coverFrame: Frame;
}

export interface ApiResponseEventOut {
  data?: EventOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The requested data */
export interface EventOut {
  /**
   * The id of event
   * @format int64
   */
  id?: number;
  /** The title of event in Russian */
  title?: string;
  /** The title of event in English */
  titleEn?: string;
  /** The status of event */
  status?: "DRAFT" | "PUBLISHED";
  cover?: Image;
  /** The photos of event */
  photos?: Image[];
  /**
   * The start date of event
   * @format date
   */
  startDate?: string;
  /**
   * The end date of event
   * @format date
   */
  endDate?: string;
  /** @example "04:47" */
  startTime?: string;
  /** @example "04:47" */
  endTime?: string;
  /** The phone of event */
  phone?: string;
  /** The email of event */
  email?: string;
  /** The website of event */
  website?: string;
  /** The link for QR code of event */
  linkForQrCode?: string;
  /** The description of event in Russian */
  description?: string;
  /** The description of event in English */
  descriptionEn?: string;
  address?: AddressOut;
}

export interface PlaceCategoryCreate {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  /**
   * The background color of place category
   * @minLength 7
   * @maxLength 7
   * @pattern #[0-9a-fA-F]{6}
   */
  backgroundColor: string;
  /**
   * The main color of place category
   * @minLength 7
   * @maxLength 7
   * @pattern #[0-9a-fA-F]{6}
   */
  color: string;
}

export interface ApiResponsePlaceCategoryOut {
  data?: PlaceCategoryOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The requested data */
export interface PlaceCategoryOut {
  /**
   * The id of place category
   * @format int64
   */
  id?: number;
  /** The title of place category in Russian */
  title?: string;
  /** The title of place category in English */
  titleEn?: string;
  /** The description of place category in Russian */
  description?: string;
  /** The description of place category in English */
  descriptionEn?: string;
  /** The background color of place category */
  backgroundColor?: string;
  /** The main color of place category */
  color?: string;
  icon?: Icon;
  /** The subcategories of the category */
  subcategories?: PlaceSubcategoryShortOut[];
}

/** The subcategories of the category */
export interface PlaceSubcategoryShortOut {
  /**
   * The id of place subcategory
   * @format int64
   */
  id?: number;
  /** The title of place subcategory in Russian */
  title?: string;
  /** The title of place subcategory in English */
  titleEn?: string;
  icon?: Icon;
  /** The background color (inherited from place category) */
  backgroundColor?: string;
  /** The main color (inherited from place category) */
  color?: string;
}

export interface PlaceSubcategoryPatch {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title?: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The id of parent category
   * @format int64
   */
  categoryId?: number;
}

export interface SpecialPlacePatch {
  /** The type of place */
  type?: string;
  /**
   * The background color of special place
   * @minLength 7
   * @maxLength 7
   * @pattern #[0-9a-fA-F]{6}
   */
  backgroundColor?: string;
  address?: AddressIn;
}

export interface RoutePatch {
  /** The status of route */
  status?: string;
  /**
   * The background color of route
   * @pattern #[0-9a-fA-F]{6}
   */
  backgroundColor?: string;
  /**
   * The color of route
   * @pattern #[0-9a-fA-F]{6}
   */
  routeColor?: string;
  /**
   * The title of route in Russian
   * @minLength 1
   * @maxLength 127
   */
  title?: string;
  /**
   * The title of route in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The length of route in Russian
   * @minLength 1
   * @maxLength 31
   */
  length?: string;
  /**
   * The length of route in English
   * @minLength 1
   * @maxLength 31
   */
  lengthEn?: string;
  /**
   * The duration of route in Russian
   * @minLength 1
   * @maxLength 31
   */
  duration?: string;
  /**
   * The duration of route in English
   * @minLength 1
   * @maxLength 31
   */
  durationEn?: string;
  /**
   * The type of route in Russian
   * @minLength 1
   * @maxLength 63
   */
  type?: string;
  /**
   * The type of route in English
   * @minLength 1
   * @maxLength 63
   */
  typeEn?: string;
  /**
   * The description of route in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description of route in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  /**
   * The stops of route
   * @maxItems 127
   * @minItems 1
   */
  stops?: StopIn[];
}

export interface PlacePatch {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title?: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /** The status of place */
  status?: string;
  /** Is recommended or not */
  recommended?: boolean;
  /**
   * The id of subcategory
   * @format int64
   */
  subcategoryId?: number;
  /**
   * The phone of place
   * @minLength 1
   * @maxLength 63
   */
  phone?: string;
  /**
   * The email of place
   * @minLength 1
   * @maxLength 63
   */
  email?: string;
  /**
   * The website of place
   * @minLength 1
   * @maxLength 63
   */
  website?: string;
  /**
   * The link for QR code of place
   * @minLength 1
   * @maxLength 63
   */
  linkForQrCode?: string;
  /**
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  address?: AddressIn;
  /**
   * The working hours of place in Russian
   * @minLength 1
   * @maxLength 63
   */
  workingHours?: string;
  /**
   * The working hours of place in English
   * @minLength 1
   * @maxLength 63
   */
  workingHoursEn?: string;
  /** The list of frames. Each frame describes coordinates and size for cropping respective image */
  frames?: Frame[];
  /**
   * The ids of photos for removing
   * @uniqueItems true
   */
  photoIdsForRemoving?: number[];
  coverFrame?: Frame;
}

export interface GeneralIn {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title?: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The Yandex Metric code
   * @minLength 1
   * @maxLength 65536
   */
  yandexMetricCode?: string;
  /**
   * The ids of videos for removing
   * @uniqueItems true
   */
  videoIdsForRemoving?: number[];
}

export interface ApiResponseGeneralOut {
  data?: GeneralOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The requested data */
export interface GeneralOut {
  /** The title in Russian */
  title?: string;
  /** The title in English */
  titleEn?: string;
  /** The Yandex Metric code */
  yandexMetricCode?: string;
  /** The list of videos info */
  videos?: VideoOut[];
}

/** The list of videos info */
export interface VideoOut {
  /**
   * The id of video
   * @format int64
   */
  id?: number;
  /** The URL for getting video */
  url?: string;
}

export interface EventPatch {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title?: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /** The status of event */
  status?: string;
  /**
   * The start date of event
   * @format date
   */
  startDate?: string;
  /**
   * The end date of event
   * @format date
   */
  endDate?: string;
  /** @example "04:47" */
  startTime?: string;
  /** @example "04:47" */
  endTime?: string;
  /**
   * The phone of event
   * @minLength 1
   * @maxLength 63
   */
  phone?: string;
  /**
   * The email of event
   * @minLength 1
   * @maxLength 63
   */
  email?: string;
  /**
   * The website of event
   * @minLength 1
   * @maxLength 63
   */
  website?: string;
  /**
   * The link for QR code of event
   * @minLength 1
   * @maxLength 63
   */
  linkForQrCode?: string;
  /**
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  address?: AddressIn;
  /** The list of frames. Each frame describes coordinates and size for cropping respective image */
  frames?: Frame[];
  /**
   * The ids of photos for removing
   * @uniqueItems true
   */
  photoIdsForRemoving?: number[];
  coverFrame?: Frame;
}

export interface PlaceCategoryPatch {
  /**
   * The title in Russian
   * @minLength 1
   * @maxLength 127
   */
  title?: string;
  /**
   * The title in English
   * @minLength 1
   * @maxLength 127
   */
  titleEn?: string;
  /**
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description?: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  /**
   * The background color of place category
   * @minLength 7
   * @maxLength 7
   * @pattern #[0-9a-fA-F]{6}
   */
  backgroundColor?: string;
  /**
   * The main color of place category
   * @minLength 7
   * @maxLength 7
   * @pattern #[0-9a-fA-F]{6}
   */
  color?: string;
}

export interface ApiPagePlaceSubcategoryOut {
  /** The list of requested rows */
  rows?: PlaceSubcategoryOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}

export interface ApiPageSpecialPlaceOut {
  /** The list of requested rows */
  rows?: SpecialPlaceOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}

export interface ApiPageRouteShortOut {
  /** The list of requested rows */
  rows?: RouteShortOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}

/** The list of requested rows */
export interface RouteShortOut {
  /**
   * The id of route
   * @format int64
   */
  id?: number;
  /** The status of route */
  status?: "DRAFT" | "PUBLISHED";
  /** The background color of route */
  backgroundColor?: string;
  icon?: Icon;
  /** The color of route */
  routeColor?: string;
  /** The title of route in Russian */
  title?: string;
  /** The title of route in English */
  titleEn?: string;
  /** The length of route in Russian */
  length?: string;
  /** The length of route in English */
  lengthEn?: string;
  /** The duration of route in Russian */
  duration?: string;
  /** The duration of route in English */
  durationEn?: string;
  /** The type of route in Russian */
  type?: string;
  /** The type of route in English */
  typeEn?: string;
  /**
   * The list of stops of route
   * The stops are sorted by sequence number
   */
  stops?: StopOut[];
}

export interface ApiPagePlaceShortOut {
  /** The list of requested rows */
  rows?: PlaceShortOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}

/** The list of requested rows */
export interface PlaceShortOut {
  /**
   * The id of place
   * @format int64
   */
  id?: number;
  /** The title of place in Russian */
  title?: string;
  /** The title of place in English */
  titleEn?: string;
  /** The status of place */
  status?: "DRAFT" | "PUBLISHED";
  cover?: Image;
  /** The description of place in Russian */
  description?: string;
  /** The description of place in English */
  descriptionEn?: string;
  subcategory?: PlaceSubcategoryShortOut;
  category?: PlaceCategoryShortOut;
  address?: AddressOut;
}

export interface ApiPageEventShortOut {
  /** The list of requested rows */
  rows?: EventShortOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}

/** The list of requested rows */
export interface EventShortOut {
  /**
   * The id of event
   * @format int64
   */
  id?: number;
  /** The title of event in Russian */
  title?: string;
  /** The title of event in English */
  titleEn?: string;
  /** The status of event */
  status?: "DRAFT" | "PUBLISHED";
  cover?: Image;
  /**
   * The start date of event
   * @format date
   */
  startDate?: string;
  /**
   * The end date of event
   * @format date
   */
  endDate?: string;
  /** @example "04:47" */
  startTime?: string;
  /** @example "04:47" */
  endTime?: string;
  /** The description of event in Russian */
  description?: string;
  /** The description of event in English */
  descriptionEn?: string;
  address?: AddressOut;
}

export interface ApiPagePlaceCategoryOut {
  /** The list of requested rows */
  rows?: PlaceCategoryOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}
