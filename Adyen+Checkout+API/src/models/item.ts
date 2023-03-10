/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Item {
  /** The value to provide in the result. */
  id?: string;
  /** The display name. */
  name?: string;
}

export const itemSchema: Schema<Item> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
});
