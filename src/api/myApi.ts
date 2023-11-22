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

/** The info about icon */
export interface MediaOut {
  /**
   * The id of media
   * @format int64
   */
  id?: number;
  /** The URL for getting media */
  url?: string;
}

/** The parent category */
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
  background?: MediaOut;
  icon?: MediaOut;
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
  category?: PlaceCategoryOut;
  icon?: MediaOut;
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
  videos?: MediaOut[];
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

export interface ApiPagePlaceCategoryOut {
  /** The list of requested rows */
  rows?: PlaceCategoryOut[];
  /**
   * The total count of rows
   * @format int64
   */
  total?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://5f8104486938.vps.myjino.ru";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title SmolenskApp API specification
 * @version 1.0.0
 * @baseUrl http://5f8104486938.vps.myjino.ru
 * @contact IT-компания Триекс <info@eeex.ru> (https://eeex.ru/)
 *
 * SmolenskApp REST API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Returns list of place subcategories
     *
     * @tags Place subcategories
     * @name GetPlaceSubcategories
     * @summary Getting list of place subcategories
     * @request GET:/api/places/subcategories
     */
    getPlaceSubcategories: (
      query?: {
        /**
         * The page number, 0 by default
         * @format int32
         * @min 0
         */
        page?: number;
        /**
         * The size of pages, 10 by default
         * @format int32
         * @min 1
         * @max 100
         */
        size?: number;
        /** The search for filtering */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiPagePlaceSubcategoryOut, any>({
        path: `/api/places/subcategories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Returns created place subcategory record
     *
     * @tags Place subcategories
     * @name CreatePlaceSubcategory
     * @summary Creating place subcategory
     * @request POST:/api/places/subcategories
     */
    createPlaceSubcategory: (
      data: {
        placeSubcategory: PlaceSubcategoryCreate;
        /** @format binary */
        icon?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponsePlaceSubcategoryOut, ApiResponsePlaceSubcategoryOut>({
        path: `/api/places/subcategories`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns list of place categories
     *
     * @tags Place categories
     * @name GetPlaceCategories
     * @summary Getting list of place categories
     * @request GET:/api/places/categories
     */
    getPlaceCategories: (
      query?: {
        /**
         * The page number, 0 by default
         * @format int32
         * @min 0
         */
        page?: number;
        /**
         * The size of pages, 10 by default
         * @format int32
         * @min 1
         * @max 100
         */
        size?: number;
        /** The search for filtering */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiPagePlaceCategoryOut, any>({
        path: `/api/places/categories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Returns created place category record
     *
     * @tags Place categories
     * @name CreatePlaceCategory
     * @summary Creating place category
     * @request POST:/api/places/categories
     */
    createPlaceCategory: (
      data: {
        placeCategory: PlaceCategoryCreate;
        /** @format binary */
        background?: File;
        /** @format binary */
        icon?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponsePlaceCategoryOut, ApiResponsePlaceCategoryOut>({
        path: `/api/places/categories`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns place subcategory record
     *
     * @tags Place subcategories
     * @name GetSubcategory
     * @summary Getting place subcategory by id
     * @request GET:/api/places/subcategories/{id}
     */
    getSubcategory: (id: number, params: RequestParams = {}) =>
      this.request<ApiResponsePlaceSubcategoryOut, ApiResponsePlaceSubcategoryOut>({
        path: `/api/places/subcategories/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns deleted place subcategory record
     *
     * @tags Place subcategories
     * @name DeletePlaceSubcategory
     * @summary Deleting place subcategory
     * @request DELETE:/api/places/subcategories/{id}
     */
    deletePlaceSubcategory: (id: number, params: RequestParams = {}) =>
      this.request<ApiResponsePlaceSubcategoryOut, ApiResponsePlaceSubcategoryOut>({
        path: `/api/places/subcategories/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Returns patched place subcategory record
     *
     * @tags Place subcategories
     * @name PatchPlaceSubcategory
     * @summary Patching place subcategory
     * @request PATCH:/api/places/subcategories/{id}
     */
    patchPlaceSubcategory: (
      id: number,
      data: {
        placeSubcategory: PlaceSubcategoryPatch;
        /** @format binary */
        icon?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponsePlaceSubcategoryOut, ApiResponsePlaceSubcategoryOut>({
        path: `/api/places/subcategories/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns place category record
     *
     * @tags Place categories
     * @name GetCategory
     * @summary Getting place category by id
     * @request GET:/api/places/categories/{id}
     */
    getCategory: (id: number, params: RequestParams = {}) =>
      this.request<ApiResponsePlaceCategoryOut, ApiResponsePlaceCategoryOut>({
        path: `/api/places/categories/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns deleted place category record
     *
     * @tags Place categories
     * @name DeletePlaceCategory
     * @summary Deleting place category
     * @request DELETE:/api/places/categories/{id}
     */
    deletePlaceCategory: (id: number, params: RequestParams = {}) =>
      this.request<ApiResponsePlaceCategoryOut, ApiResponsePlaceCategoryOut>({
        path: `/api/places/categories/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Returns patched place category record
     *
     * @tags Place categories
     * @name PatchPlaceCategory
     * @summary Patching place category
     * @request PATCH:/api/places/categories/{id}
     */
    patchPlaceCategory: (
      id: number,
      data: {
        placeCategory: PlaceCategoryPatch;
        /** @format binary */
        background?: File;
        /** @format binary */
        icon?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponsePlaceCategoryOut, ApiResponsePlaceCategoryOut>({
        path: `/api/places/categories/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns 'general' record
     *
     * @tags General
     * @name Get
     * @summary Getting 'general'
     * @request GET:/api/general
     */
    get: (params: RequestParams = {}) =>
      this.request<ApiResponseGeneralOut, any>({
        path: `/api/general`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns patched 'general' record
     *
     * @tags General
     * @name Update
     * @summary Patching 'general'
     * @request PATCH:/api/general
     */
    update: (
      data: {
        general: GeneralIn;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponseGeneralOut, ApiResponseGeneralOut>({
        path: `/api/general`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns stream of video
     *
     * @tags Store
     * @name GetVideo
     * @summary Streaming video from store
     * @request GET:/api/store/video/{key}
     */
    getVideo: (key: string, params: RequestParams = {}) =>
      this.request<string, File>({
        path: `/api/store/video/${key}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns image
     *
     * @tags Store
     * @name GetImage
     * @summary Getting image from store
     * @request GET:/api/store/image/{size}/{key}
     */
    getImage: (key: string, size: "S_3_X_2" | "S_3_X_2_ORIGINAL" | "S_ORIGINAL", params: RequestParams = {}) =>
      this.request<string, File>({
        path: `/api/store/image/${size}/${key}`,
        method: "GET",
        ...params,
      }),
  };
}
