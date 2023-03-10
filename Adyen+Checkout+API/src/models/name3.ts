/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program. */
export interface Name3 {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
}

export const name3Schema: Schema<Name3> = object({
  firstName: ['firstName', string()],
  lastName: ['lastName', string()],
});
