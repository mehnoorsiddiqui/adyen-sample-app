/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AdditionalDataWallets {
  /** The Android Pay token retrieved from the SDK. */
  androidpayToken?: string;
  /** The Mastercard Masterpass Transaction ID retrieved from the SDK. */
  masterpassTransactionId?: string;
  /** The Apple Pay token retrieved from the SDK. */
  paymentToken?: string;
  /** The Google Pay token retrieved from the SDK. */
  paywithgoogleToken?: string;
  /** The Samsung Pay token retrieved from the SDK. */
  samsungpayToken?: string;
  /** The Visa Checkout Call ID retrieved from the SDK. */
  visacheckoutCallId?: string;
}

export const additionalDataWalletsSchema: Schema<AdditionalDataWallets> = object(
  {
    androidpayToken: ['androidpay.token', optional(string())],
    masterpassTransactionId: ['masterpass.transactionId', optional(string())],
    paymentToken: ['payment.token', optional(string())],
    paywithgoogleToken: ['paywithgoogle.token', optional(string())],
    samsungpayToken: ['samsungpay.token', optional(string())],
    visacheckoutCallId: ['visacheckout.callId', optional(string())],
  }
);
