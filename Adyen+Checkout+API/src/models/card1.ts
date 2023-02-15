/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  FundingSourceEnum,
  fundingSourceEnumSchema,
} from './fundingSourceEnum';
import { Type8Enum, type8EnumSchema } from './type8Enum';

export interface Card1 {
  /** Secondary brand of the card. For example: **plastix**, **hmclub**. */
  brand?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  cupsecureplusSmscode?: string;
  /** The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). */
  cvc?: string;
  /** The encrypted card number. */
  encryptedCardNumber: string;
  /** The encrypted card expiry month. */
  encryptedExpiryMonth: string;
  /** The encrypted card expiry year. */
  encryptedExpiryYear: string;
  /** The encrypted card verification code. */
  encryptedSecurityCode?: string;
  /** The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). */
  expiryMonth?: string;
  /** The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). */
  expiryYear?: string;
  /** The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. */
  fundingSource?: FundingSourceEnum;
  /** The name of the card holder. */
  holderName?: string;
  /** The network token reference. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment. */
  networkPaymentReference?: string;
  /** The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). */
  number?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India. */
  shopperNotificationReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** Version of the 3D Secure 2 mobile SDK. */
  threeDS2SdkVersion?: string;
  /** Default payment method details. Common for scheme payment methods, and for simple payment method details. */
  type?: Type8Enum;
}

export const card1Schema: Schema<Card1> = object({
  brand: ['brand', optional(string())],
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  cupsecureplusSmscode: ['cupsecureplus.smscode', optional(string())],
  cvc: ['cvc', optional(string())],
  encryptedCardNumber: ['encryptedCardNumber', string()],
  encryptedExpiryMonth: ['encryptedExpiryMonth', string()],
  encryptedExpiryYear: ['encryptedExpiryYear', string()],
  encryptedSecurityCode: ['encryptedSecurityCode', optional(string())],
  expiryMonth: ['expiryMonth', optional(string())],
  expiryYear: ['expiryYear', optional(string())],
  fundingSource: ['fundingSource', optional(fundingSourceEnumSchema)],
  holderName: ['holderName', optional(string())],
  networkPaymentReference: ['networkPaymentReference', optional(string())],
  number: ['number', optional(string())],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  shopperNotificationReference: [
    'shopperNotificationReference',
    optional(string()),
  ],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  threeDS2SdkVersion: ['threeDS2SdkVersion', optional(string())],
  type: ['type', optional(type8EnumSchema)],
});
