/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  FundingSourceEnum,
  fundingSourceEnumSchema,
} from './fundingSourceEnum';
import { Type26Enum, type26EnumSchema } from './type26Enum';

export interface GooglePay1 {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. */
  fundingSource?: FundingSourceEnum;
  /** The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response. */
  googlePayToken: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **paywithgoogle** */
  type?: Type26Enum;
}

export const googlePay1Schema: Schema<GooglePay1> = object({
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  fundingSource: ['fundingSource', optional(fundingSourceEnumSchema)],
  googlePayToken: ['googlePayToken', string()],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  type: ['type', optional(type26EnumSchema)],
});
