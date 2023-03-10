/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';
import {
  AccountAgeIndicatorEnum,
  accountAgeIndicatorEnumSchema,
} from './accountAgeIndicatorEnum';
import {
  AccountChangeIndicatorEnum,
  accountChangeIndicatorEnumSchema,
} from './accountChangeIndicatorEnum';
import { AccountTypeEnum, accountTypeEnumSchema } from './accountTypeEnum';
import {
  DeliveryAddressUsageIndicatorEnum,
  deliveryAddressUsageIndicatorEnumSchema,
} from './deliveryAddressUsageIndicatorEnum';
import {
  PasswordChangeIndicatorEnum,
  passwordChangeIndicatorEnumSchema,
} from './passwordChangeIndicatorEnum';
import {
  PaymentAccountIndicatorEnum,
  paymentAccountIndicatorEnumSchema,
} from './paymentAccountIndicatorEnum';

export interface AccountInfo {
  /**
   * Indicator for the length of time since this shopper account was created in the merchant's environment.
   * Allowed values:
   * * notApplicable
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  accountAgeIndicator?: AccountAgeIndicatorEnum;
  /** Date when the shopper's account was last changed. */
  accountChangeDate?: string;
  /**
   * Indicator for the length of time since the shopper's account was last updated.
   * Allowed values:
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  accountChangeIndicator?: AccountChangeIndicatorEnum;
  /** Date when the shopper's account was created. */
  accountCreationDate?: string;
  /**
   * Indicates the type of account. For example, for a multi-account card product.
   * Allowed values:
   * * notApplicable
   * * credit
   * * debit
   */
  accountType?: AccountTypeEnum;
  /** Number of attempts the shopper tried to add a card to their account in the last day. */
  addCardAttemptsDay?: number;
  /** Date the selected delivery address was first used. */
  deliveryAddressUsageDate?: string;
  /**
   * Indicator for the length of time since this delivery address was first used.
   * Allowed values:
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  deliveryAddressUsageIndicator?: DeliveryAddressUsageIndicatorEnum;
  /** Shopper's home phone number (including the country code). */
  homePhone?: string;
  /** Shopper's mobile phone number (including the country code). */
  mobilePhone?: string;
  /** Date when the shopper last changed their password. */
  passwordChangeDate?: string;
  /**
   * Indicator when the shopper has changed their password.
   * Allowed values:
   * * notApplicable
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  passwordChangeIndicator?: PasswordChangeIndicatorEnum;
  /** Number of all transactions (successful and abandoned) from this shopper in the past 24 hours. */
  pastTransactionsDay?: number;
  /** Number of all transactions (successful and abandoned) from this shopper in the past year. */
  pastTransactionsYear?: number;
  /** Date this payment method was added to the shopper's account. */
  paymentAccountAge?: string;
  /**
   * Indicator for the length of time since this payment method was added to this shopper's account.
   * Allowed values:
   * * notApplicable
   * * thisTransaction
   * * lessThan30Days
   * * from30To60Days
   * * moreThan60Days
   */
  paymentAccountIndicator?: PaymentAccountIndicatorEnum;
  /** Number of successful purchases in the last six months. */
  purchasesLast6Months?: number;
  /** Whether suspicious activity was recorded on this account. */
  suspiciousActivity?: boolean;
  /** Shopper's work phone number (including the country code). */
  workPhone?: string;
}

export const accountInfoSchema: Schema<AccountInfo> = object({
  accountAgeIndicator: [
    'accountAgeIndicator',
    optional(accountAgeIndicatorEnumSchema),
  ],
  accountChangeDate: ['accountChangeDate', optional(string())],
  accountChangeIndicator: [
    'accountChangeIndicator',
    optional(accountChangeIndicatorEnumSchema),
  ],
  accountCreationDate: ['accountCreationDate', optional(string())],
  accountType: ['accountType', optional(accountTypeEnumSchema)],
  addCardAttemptsDay: ['addCardAttemptsDay', optional(number())],
  deliveryAddressUsageDate: ['deliveryAddressUsageDate', optional(string())],
  deliveryAddressUsageIndicator: [
    'deliveryAddressUsageIndicator',
    optional(deliveryAddressUsageIndicatorEnumSchema),
  ],
  homePhone: ['homePhone', optional(string())],
  mobilePhone: ['mobilePhone', optional(string())],
  passwordChangeDate: ['passwordChangeDate', optional(string())],
  passwordChangeIndicator: [
    'passwordChangeIndicator',
    optional(passwordChangeIndicatorEnumSchema),
  ],
  pastTransactionsDay: ['pastTransactionsDay', optional(number())],
  pastTransactionsYear: ['pastTransactionsYear', optional(number())],
  paymentAccountAge: ['paymentAccountAge', optional(string())],
  paymentAccountIndicator: [
    'paymentAccountIndicator',
    optional(paymentAccountIndicatorEnumSchema),
  ],
  purchasesLast6Months: ['purchasesLast6Months', optional(number())],
  suspiciousActivity: ['suspiciousActivity', optional(boolean())],
  workPhone: ['workPhone', optional(string())],
});
