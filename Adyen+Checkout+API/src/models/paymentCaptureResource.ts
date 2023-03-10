/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Amount29, amount29Schema } from './amount29';
import { LineItem, lineItemSchema } from './lineItem';
import { Split, splitSchema } from './split';

export interface PaymentCaptureResource {
  /** The captured amount. */
  amount: Amount29;
  /**
   * Price and product information of the captured items, required for [partial captures](https://docs.adyen.com/online-payments/capture#partial-capture).
   * > This field is required for partial captures with 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome.
   */
  lineItems?: LineItem[];
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /** The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to capture. */
  paymentPspReference: string;
  /** Adyen's 16-character reference associated with the capture request. */
  pspReference: string;
  /** Your reference for the capture request. */
  reference?: string;
  /** An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). */
  splits?: Split[];
  /** The status of your request. This will always have the value **received**. */
  status: string;
}

export const paymentCaptureResourceSchema: Schema<PaymentCaptureResource> = object(
  {
    amount: ['amount', lazy(() => amount29Schema)],
    lineItems: ['lineItems', optional(array(lazy(() => lineItemSchema)))],
    merchantAccount: ['merchantAccount', string()],
    paymentPspReference: ['paymentPspReference', string()],
    pspReference: ['pspReference', string()],
    reference: ['reference', optional(string())],
    splits: ['splits', optional(array(lazy(() => splitSchema)))],
    status: ['status', string()],
  }
);
