/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Amount10, amount10Schema } from './amount10';

export interface CheckoutCreateOrderRequest {
  /** The total amount of the order. */
  amount: Amount10;
  /** The date that order expires; e.g. 2019-03-23T12:25:28Z. If not provided, the default expiry duration is 1 day. */
  expiresAt?: string;
  /** The merchant account identifier, with which you want to process the order. */
  merchantAccount: string;
  /** A custom reference identifying the order. */
  reference: string;
}

export const checkoutCreateOrderRequestSchema: Schema<CheckoutCreateOrderRequest> = object(
  {
    amount: ['amount', lazy(() => amount10Schema)],
    expiresAt: ['expiresAt', optional(string())],
    merchantAccount: ['merchantAccount', string()],
    reference: ['reference', string()],
  }
);
