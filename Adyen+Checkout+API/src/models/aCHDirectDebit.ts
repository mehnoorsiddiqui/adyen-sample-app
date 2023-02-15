/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface ACHDirectDebit {
  /** The bank account number (without separators). */
  bankAccountNumber: string;
  /** The bank routing number of the account. The field value is `nil` in most cases. */
  bankLocationId?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Encrypted bank account number. The bank account number (without separators). */
  encryptedBankAccountNumber?: string;
  /** Encrypted location id. The bank routing number of the account. The field value is `nil` in most cases. */
  encryptedBankLocationId?: string;
  /**
   * The name of the bank account holder.
   * If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:
   * * χ12 is converted to ch12.
   * * üA is converted to euA.
   * * Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.
   * After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:
   * * John17 - allowed.
   * * J17 - allowed.
   * * 171 - not allowed.
   * * John-7 - allowed.
   * > If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.
   */
  ownerName?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **ach** */
  type?: TypeEnum;
}

export const aCHDirectDebitSchema: Schema<ACHDirectDebit> = object({
  bankAccountNumber: ['bankAccountNumber', string()],
  bankLocationId: ['bankLocationId', optional(string())],
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  encryptedBankAccountNumber: [
    'encryptedBankAccountNumber',
    optional(string()),
  ],
  encryptedBankLocationId: ['encryptedBankLocationId', optional(string())],
  ownerName: ['ownerName', optional(string())],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  type: ['type', optional(typeEnumSchema)],
});
