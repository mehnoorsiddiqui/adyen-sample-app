/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema } from '../schema';
import { Plan1Enum, plan1EnumSchema } from './plan1Enum';

export interface InstallmentOption {
  /** The maximum number of installments offered for this payment method. */
  maxValue?: number;
  /**
   * Defines the type of installment plan. If not set, defaults to **regular**.
   * Possible values:
   * * **regular**
   * * **revolving**
   */
  plans?: Plan1Enum[];
  /** Preselected number of installments offered for this payment method. */
  preselectedValue?: number;
  /** An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`. */
  values?: number[];
}

export const installmentOptionSchema: Schema<InstallmentOption> = object({
  maxValue: ['maxValue', optional(number())],
  plans: ['plans', optional(array(plan1EnumSchema))],
  preselectedValue: ['preselectedValue', optional(number())],
  values: ['values', optional(array(number()))],
});
