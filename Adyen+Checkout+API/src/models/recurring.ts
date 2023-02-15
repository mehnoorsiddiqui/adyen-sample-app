/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { ContractEnum, contractEnumSchema } from './contractEnum';
import { TokenServiceEnum, tokenServiceEnumSchema } from './tokenServiceEnum';

export interface Recurring {
  /**
   * The type of recurring contract to be used.
   * Possible values:
   * * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).
   * * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).
   * * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
   * * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).
   */
  contract?: ContractEnum;
  /** A descriptive name for this detail. */
  recurringDetailName?: string;
  /** Date after which no further authorisations shall be performed. Only for 3D Secure 2. */
  recurringExpiry?: string;
  /** Minimum number of days between authorisations. Only for 3D Secure 2. */
  recurringFrequency?: string;
  /** The name of the token service. */
  tokenService?: TokenServiceEnum;
}

export const recurringSchema: Schema<Recurring> = object({
  contract: ['contract', optional(contractEnumSchema)],
  recurringDetailName: ['recurringDetailName', optional(string())],
  recurringExpiry: ['recurringExpiry', optional(string())],
  recurringFrequency: ['recurringFrequency', optional(string())],
  tokenService: ['tokenService', optional(tokenServiceEnumSchema)],
});
