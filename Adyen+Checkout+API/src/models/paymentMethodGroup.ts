/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PaymentMethodGroup {
  /** The name of the group. */
  name?: string;
  /** Echo data to be used if the payment method is displayed as part of this group. */
  paymentMethodData?: string;
  /** The unique code of the group. */
  type?: string;
}

export const paymentMethodGroupSchema: Schema<PaymentMethodGroup> = object({
  name: ['name', optional(string())],
  paymentMethodData: ['paymentMethodData', optional(string())],
  type: ['type', optional(string())],
});
