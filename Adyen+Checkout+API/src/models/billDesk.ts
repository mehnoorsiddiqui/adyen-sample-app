/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { Type6Enum, type6EnumSchema } from './type6Enum';

export interface BillDesk {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The issuer id of the shopper's selected bank. */
  issuer: string;
  /** **billdesk** */
  type: Type6Enum;
}

export const billDeskSchema: Schema<BillDesk> = object({
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  issuer: ['issuer', string()],
  type: ['type', type6EnumSchema],
});
