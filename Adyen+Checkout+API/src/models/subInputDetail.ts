/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Item, itemSchema } from './item';

export interface SubInputDetail {
  /** Configuration parameters for the required input. */
  configuration?: Record<string, string>;
  /** In case of a select, the items to choose from. */
  items?: Item[];
  /** The value to provide in the result. */
  key?: string;
  /** True if this input is optional to provide. */
  optional?: boolean;
  /** The type of the required input. */
  type?: string;
  /** The value can be pre-filled, if available. */
  value?: string;
}

export const subInputDetailSchema: Schema<SubInputDetail> = object({
  configuration: ['configuration', optional(dict(string()))],
  items: ['items', optional(array(lazy(() => itemSchema)))],
  key: ['key', optional(string())],
  optional: ['optional', optional(boolean())],
  type: ['type', optional(string())],
  value: ['value', optional(string())],
});
