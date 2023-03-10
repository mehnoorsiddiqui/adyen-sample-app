/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface FraudCheckResult {
  /** The fraud score generated by the risk check. */
  accountScore: number;
  /** The ID of the risk check. */
  checkId: number;
  /** The name of the risk check. */
  name: string;
}

export const fraudCheckResultSchema: Schema<FraudCheckResult> = object({
  accountScore: ['accountScore', number()],
  checkId: ['checkId', number()],
  name: ['name', string()],
});
