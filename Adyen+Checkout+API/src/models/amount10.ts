/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema, string } from '../schema';

/** The total amount of the order. */
export interface Amount10 {
  /** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). */
  currency: string;
  /** The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). */
  value: bigint;
}

export const amount10Schema: Schema<Amount10> = object({
  currency: ['currency', string()],
  value: ['value', bigint()],
});
