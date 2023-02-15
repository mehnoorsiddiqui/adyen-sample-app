/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Merchant developed software, such as cashier application, used to interact with the Adyen API. */
export interface CommonField2 {
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
}

export const commonField2Schema: Schema<CommonField2> = object({
  name: ['name', optional(string())],
  version: ['version', optional(string())],
});
