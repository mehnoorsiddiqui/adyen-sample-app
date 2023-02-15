/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, number, object, optional, Schema, string } from '../schema';

/** Any risk-related settings to apply to the payment. */
export interface RiskData1 {
  /** Contains client-side data, like the device fingerprint, cookies, and specific browser settings. */
  clientData?: string;
  /** Any custom fields used as part of the input to configured risk rules. */
  customFields?: Record<string, string>;
  /** An integer value that is added to the normal fraud score. The value can be either positive or negative. */
  fraudOffset?: number;
  /** The risk profile to assign to this payment. When left empty, the merchant-level account's default risk profile will be applied. */
  profileReference?: string;
}

export const riskData1Schema: Schema<RiskData1> = object({
  clientData: ['clientData', optional(string())],
  customFields: ['customFields', optional(dict(string()))],
  fraudOffset: ['fraudOffset', optional(number())],
  profileReference: ['profileReference', optional(string())],
});