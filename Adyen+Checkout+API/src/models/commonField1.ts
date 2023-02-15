/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc. */
export interface CommonField1 {
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
}

export const commonField1Schema: Schema<CommonField1> = object({
  name: ['name', optional(string())],
  version: ['version', optional(string())],
});
