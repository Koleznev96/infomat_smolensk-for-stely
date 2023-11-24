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
  categoryId?: number;
}

export interface ApiResponsePlaceSubcategoryOut {
  data?: PlaceSubcategoryOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The info about background */
export interface Background {
  /**
   * The id of image
   * @format int64
   */
  id?: number;
  /** The URL for getting background */
  url?: string;
}

/** The list of an errors */
export interface ErrorRecord {
  /** Details about error */
  details?: string;
  /** Field which caused this error */
  field?: string;
}

/** The info about icon */
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
  background?: Background;
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

/** The address of place */
export interface AddressIn {
  /** The text address */
  address: string;
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

/** The list of frames. Each frame describes coordinates and size for cropping respective image */
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
   * The description in Russian
   * @minLength 1
   * @maxLength 65536
   */
  description: string;
  /**
   * The description in English
   * @minLength 1
   * @maxLength 65536
   */
  descriptionEn?: string;
  address: AddressIn;
  /**
   * The working hours of place
   * @minLength 1
   * @maxLength 63
   */
  workingHours?: string;
  /** The list of frames. Each frame describes coordinates and size for cropping respective image */
  frames?: Frame[];
}

/** The address of place */
export interface AddressOut {
  /**
   * The id of address
   * @format int64
   */
  id?: number;
  /** The text address */
  address?: string;
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

export interface ApiResponsePlaceOut {
  data?: PlaceOut;
  /** The list of an errors */
  errors?: ErrorRecord[];
}

/** The cover of place */
export interface Cover {
  /**
   * The id of image
   * @format int64
   */
  id?: number;
  /** The URL for getting cover */
  url?: string;
}

/** The photos of place */
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
  cover?: Cover;
  /** The photos of place */
  photos?: Image[];
  subcategory?: PlaceSubcategoryOut;
  /** The phone of place */
  phone?: string;
  /** The email of place */
  email?: string;
  /** The website of place */
  website?: string;
  /** The description of place in Russian */
  description?: string;
  /** The description of place in English */
  descriptionEn?: string;
  address?: AddressOut;
  /** The working hours of place */
  workingHours?: string;
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
  background?: Background;
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
   * The working hours of place
   * @minLength 1
   * @maxLength 63
   */
  workingHours?: string;
  /** The list of frames. Each frame describes coordinates and size for cropping respective image */
  frames?: Frame[];
  /**
   * The ids of photos for removing
   * @uniqueItems true
   */
  photoIdsForRemoving?: number[];
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
  cover?: Cover;
  /** The description of place in Russian */
  description?: string;
  /** The description of place in English */
  descriptionEn?: string;
  subcategory?: PlaceSubcategoryShortOut;
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
