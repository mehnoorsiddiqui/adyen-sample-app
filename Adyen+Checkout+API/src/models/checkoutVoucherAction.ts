/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Amount15, amount15Schema } from './amount15';
import { Amount16, amount16Schema } from './amount16';
import { Amount17, amount17Schema } from './amount17';

export interface CheckoutVoucherAction {
  /** The voucher alternative reference code. */
  alternativeReference?: string;
  /** A collection institution number (store number) for Econtext Pay-Easy ATM. */
  collectionInstitutionNumber?: string;
  /** The URL to download the voucher. */
  downloadUrl?: string;
  /** An entity number of Multibanco. */
  entity?: string;
  /** The date time of the voucher expiry. */
  expiresAt?: string;
  /** The initial amount. */
  initialAmount?: Amount15;
  /** The URL to the detailed instructions to make payment using the voucher. */
  instructionsUrl?: string;
  /** The issuer of the voucher. */
  issuer?: string;
  /** The shopper telephone number (partially masked). */
  maskedTelephoneNumber?: string;
  /** The merchant name. */
  merchantName?: string;
  /** The merchant reference. */
  merchantReference?: string;
  /** A value that must be submitted to the `/payments/details` endpoint to verify this payment. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** The voucher reference code. */
  reference?: string;
  /** The shopper email. */
  shopperEmail?: string;
  /** The shopper name. */
  shopperName?: string;
  /** The surcharge amount. */
  surcharge?: Amount16;
  /** The total amount (initial plus surcharge amount). */
  totalAmount?: Amount17;
  /** **voucher** */
  type: string;
  /** Specifies the URL to redirect to. */
  url?: string;
}

export const checkoutVoucherActionSchema: Schema<CheckoutVoucherAction> = object(
  {
    alternativeReference: ['alternativeReference', optional(string())],
    collectionInstitutionNumber: [
      'collectionInstitutionNumber',
      optional(string()),
    ],
    downloadUrl: ['downloadUrl', optional(string())],
    entity: ['entity', optional(string())],
    expiresAt: ['expiresAt', optional(string())],
    initialAmount: ['initialAmount', optional(lazy(() => amount15Schema))],
    instructionsUrl: ['instructionsUrl', optional(string())],
    issuer: ['issuer', optional(string())],
    maskedTelephoneNumber: ['maskedTelephoneNumber', optional(string())],
    merchantName: ['merchantName', optional(string())],
    merchantReference: ['merchantReference', optional(string())],
    paymentData: ['paymentData', optional(string())],
    paymentMethodType: ['paymentMethodType', optional(string())],
    reference: ['reference', optional(string())],
    shopperEmail: ['shopperEmail', optional(string())],
    shopperName: ['shopperName', optional(string())],
    surcharge: ['surcharge', optional(lazy(() => amount16Schema))],
    totalAmount: ['totalAmount', optional(lazy(() => amount17Schema))],
    type: ['type', string()],
    url: ['url', optional(string())],
  }
);
