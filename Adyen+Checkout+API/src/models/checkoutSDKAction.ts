/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, string } from '../schema';
import { Type11Enum, type11EnumSchema } from './type11Enum';

export interface CheckoutSDKAction {
  /** A value that must be submitted to the `/payments/details` endpoint to verify this payment. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** The data to pass to the SDK. */
  sdkData?: Record<string, string>;
  /** The type of the action. */
  type: Type11Enum;
  /** Specifies the URL to redirect to. */
  url?: string;
}

export const checkoutSDKActionSchema: Schema<CheckoutSDKAction> = object({
  paymentData: ['paymentData', optional(string())],
  paymentMethodType: ['paymentMethodType', optional(string())],
  sdkData: ['sdkData', optional(dict(string()))],
  type: ['type', type11EnumSchema],
  url: ['url', optional(string())],
});
