/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentAccountIndicatorEnum
 */
export enum PaymentAccountIndicatorEnum {
  NotApplicable = 'notApplicable',
  ThisTransaction = 'thisTransaction',
  LessThan30Days = 'lessThan30Days',
  From30To60Days = 'from30To60Days',
  MoreThan60Days = 'moreThan60Days',
}

/**
 * Schema for PaymentAccountIndicatorEnum
 */
export const paymentAccountIndicatorEnumSchema: Schema<PaymentAccountIndicatorEnum> = stringEnum(PaymentAccountIndicatorEnum);
