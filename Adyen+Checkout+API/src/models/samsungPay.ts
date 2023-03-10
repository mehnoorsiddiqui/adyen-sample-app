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
import { Type29Enum, type29EnumSchema } from './type29Enum';

export interface SamsungPay {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. */
  fundingSource?: FundingSourceEnum;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** The payload you received from the Samsung Pay SDK response. */
  samsungPayToken: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **samsungpay** */
  type?: Type29Enum;
}

export const samsungPaySchema: Schema<SamsungPay> = object({
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  fundingSource: ['fundingSource', optional(fundingSourceEnumSchema)],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  samsungPayToken: ['samsungPayToken', string()],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  type: ['type', optional(type29EnumSchema)],
});
