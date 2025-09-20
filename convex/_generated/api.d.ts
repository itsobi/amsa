/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as division from "../division.js";
import type * as fullSeasons from "../fullSeasons.js";
import type * as matches from "../matches.js";
import type * as schedules from "../schedules.js";
import type * as seasons from "../seasons.js";
import type * as standings from "../standings.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  division: typeof division;
  fullSeasons: typeof fullSeasons;
  matches: typeof matches;
  schedules: typeof schedules;
  seasons: typeof seasons;
  standings: typeof standings;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
