/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { AmountRuleEnum, amountRuleEnumSchema } from './amountRuleEnum';
import {
  BillingAttemptsRuleEnum,
  billingAttemptsRuleEnumSchema,
} from './billingAttemptsRuleEnum';
import { FrequencyEnum, frequencyEnumSchema } from './frequencyEnum';

/** The mandate details to initiate recurring transaction. */
export interface Mandate1 {
  /** The billing amount (in minor units) of the recurring transactions. */
  amount: string;
  /**
   * The limitation rule of the billing amount.
   * Possible values:
   *  * **max**: The transaction amount can not exceed the `amount`.
   *  * **exact**: The transaction amount should be the same as the `amount`.
   */
  amountRule?: AmountRuleEnum;
  /**
   * The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.
   * Possible values:
   *  * **on**: On a specific date.
   *  * **before**:  Before and on a specific date.
   *  * **after**: On and after a specific date.
   */
  billingAttemptsRule?: BillingAttemptsRuleEnum;
  /**
   * The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.
   * Possible values: 1-31 based on the `frequency`.
   */
  billingDay?: string;
  /** End date of the billing plan, in YYYY-MM-DD format. */
  endsAt: string;
  /**
   * The frequency with which a shopper should be charged.
   * Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.
   */
  frequency: FrequencyEnum;
  /** The message shown by UPI to the shopper on the approval screen. */
  remarks?: string;
  /** Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. */
  startsAt?: string;
}

export const mandate1Schema: Schema<Mandate1> = object({
  amount: ['amount', string()],
  amountRule: ['amountRule', optional(amountRuleEnumSchema)],
  billingAttemptsRule: [
    'billingAttemptsRule',
    optional(billingAttemptsRuleEnumSchema),
  ],
  billingDay: ['billingDay', optional(string())],
  endsAt: ['endsAt', string()],
  frequency: ['frequency', frequencyEnumSchema],
  remarks: ['remarks', optional(string())],
  startsAt: ['startsAt', optional(string())],
});
