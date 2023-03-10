/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { Type16Enum, type16EnumSchema } from './type16Enum';

export interface StoredPaymentMethod {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The issuer id of the shopper's selected bank. */
  issuer: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **genericissuer** */
  type: Type16Enum;
}

export const storedPaymentMethodSchema: Schema<StoredPaymentMethod> = object({
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  issuer: ['issuer', string()],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  type: ['type', type16EnumSchema],
});
