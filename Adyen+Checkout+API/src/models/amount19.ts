/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

/** The amount of the payment. */
export interface Amount19 {
  /** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). */
  currency: string;
  /** The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). */
  value: number;
}

export const amount19Schema: Schema<Amount19> = object({
  currency: ['currency', string()],
  value: ['value', number()],
});
