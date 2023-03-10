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
import { SubInputDetail, subInputDetailSchema } from './subInputDetail';

export interface InputDetail {
  /** Configuration parameters for the required input. */
  configuration?: Record<string, string>;
  /** Input details can also be provided recursively. */
  details?: SubInputDetail[];
  /** Input details can also be provided recursively (deprecated). */
  inputDetails?: SubInputDetail[];
  /** In case of a select, the URL from which to query the items. */
  itemSearchUrl?: string;
  /** In case of a select, the items to choose from. */
  items?: Item[];
  /** The value to provide in the result. */
  key?: string;
  /** True if this input value is optional. */
  optional?: boolean;
  /** The type of the required input. */
  type?: string;
  /** The value can be pre-filled, if available. */
  value?: string;
}

export const inputDetailSchema: Schema<InputDetail> = object({
  configuration: ['configuration', optional(dict(string()))],
  details: ['details', optional(array(lazy(() => subInputDetailSchema)))],
  inputDetails: [
    'inputDetails',
    optional(array(lazy(() => subInputDetailSchema))),
  ],
  itemSearchUrl: ['itemSearchUrl', optional(string())],
  items: ['items', optional(array(lazy(() => itemSchema)))],
  key: ['key', optional(string())],
  optional: ['optional', optional(boolean())],
  type: ['type', optional(string())],
  value: ['value', optional(string())],
});
