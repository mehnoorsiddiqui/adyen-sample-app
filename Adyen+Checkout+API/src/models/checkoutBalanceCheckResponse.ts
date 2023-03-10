/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, object, optional, Schema, string } from '../schema';
import { Amount8, amount8Schema } from './amount8';
import { Amount9, amount9Schema } from './amount9';
import { FraudResult1, fraudResult1Schema } from './fraudResult1';
import { ResultCodeEnum, resultCodeEnumSchema } from './resultCodeEnum';

export interface CheckoutBalanceCheckResponse {
  /** Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. */
  additionalData?: Record<string, string>;
  /** The balance for the payment method. */
  balance: Amount8;
  /** The fraud result properties of the payment. */
  fraudResult?: FraudResult1;
  /** Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. */
  pspReference?: string;
  /**
   * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
   * For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
   */
  refusalReason?: string;
  /**
   * The result of the cancellation request.
   * Possible values:
   * * **Success** – Indicates that the balance check was successful.
   * * **NotEnoughBalance** – Commonly indicates that the card did not have enough balance to pay the amount in the request, or that the currency of the balance on the card did not match the currency of the requested amount.
   * * **Failed** – Indicates that the balance check failed.
   */
  resultCode: ResultCodeEnum;
  /** The maximum spendable balance for a single transaction. Applicable to some gift cards. */
  transactionLimit?: Amount9;
}

export const checkoutBalanceCheckResponseSchema: Schema<CheckoutBalanceCheckResponse> = object(
  {
    additionalData: ['additionalData', optional(dict(string()))],
    balance: ['balance', lazy(() => amount8Schema)],
    fraudResult: ['fraudResult', optional(lazy(() => fraudResult1Schema))],
    pspReference: ['pspReference', optional(string())],
    refusalReason: ['refusalReason', optional(string())],
    resultCode: ['resultCode', resultCodeEnumSchema],
    transactionLimit: ['transactionLimit', optional(lazy(() => amount9Schema))],
  }
);
