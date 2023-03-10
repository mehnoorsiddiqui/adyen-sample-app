/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/**
 * Details about the payment method used in the transaction.
 * Only returned if `resultCode` is **Authorised**.
 */
export interface PaymentResponse1 {
  /** The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**. */
  brand?: string;
  /** The `paymentMethod.type` value used in the request. */
  type?: string;
}

export const paymentResponse1Schema: Schema<PaymentResponse1> = object({
  brand: ['brand', optional(string())],
  type: ['type', optional(string())],
});
