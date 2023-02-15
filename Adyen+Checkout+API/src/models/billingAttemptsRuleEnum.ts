/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BillingAttemptsRuleEnum
 */
export enum BillingAttemptsRuleEnum {
  On = 'on',
  Before = 'before',
  After = 'after',
}

/**
 * Schema for BillingAttemptsRuleEnum
 */
export const billingAttemptsRuleEnumSchema: Schema<BillingAttemptsRuleEnum> = stringEnum(BillingAttemptsRuleEnum);
