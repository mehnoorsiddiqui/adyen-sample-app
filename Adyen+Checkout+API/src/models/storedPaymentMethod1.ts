/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { Type31Enum, type31EnumSchema } from './type31Enum';

export interface StoredPaymentMethod1 {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** The payment method type. */
  type?: Type31Enum;
}

export const storedPaymentMethod1Schema: Schema<StoredPaymentMethod1> = object({
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  type: ['type', optional(type31EnumSchema)],
});
