/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The work phone number provided by the Cardholder. */
export interface Phone2 {
  /** Country code. Length: 1–3 characters. */
  cc?: string;
  /** Subscriber number. Maximum length: 15 characters. */
  subscriber?: string;
}

export const phone2Schema: Schema<Phone2> = object({
  cc: ['cc', optional(string())],
  subscriber: ['subscriber', optional(string())],
});
