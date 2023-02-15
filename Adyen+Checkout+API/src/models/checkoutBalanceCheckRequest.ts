/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { AccountInfo1, accountInfo1Schema } from './accountInfo1';
import { Address1, address1Schema } from './address1';
import { Address2, address2Schema } from './address2';
import { Amount1, amount1Schema } from './amount1';
import { Amount2, amount2Schema } from './amount2';
import { ApplicationInfo1, applicationInfo1Schema } from './applicationInfo1';
import { BrowserInfo1, browserInfo1Schema } from './browserInfo1';
import { ForexQuote2, forexQuote2Schema } from './forexQuote2';
import { Installments2, installments2Schema } from './installments2';
import {
  MerchantRiskIndicator2,
  merchantRiskIndicator2Schema,
} from './merchantRiskIndicator2';
import { Name7, name7Schema } from './name7';
import { Recurring2, recurring2Schema } from './recurring2';
import {
  RecurringProcessingModelEnum,
  recurringProcessingModelEnumSchema,
} from './recurringProcessingModelEnum';
import {
  ShopperInteractionEnum,
  shopperInteractionEnumSchema,
} from './shopperInteractionEnum';
import { Split, splitSchema } from './split';
import {
  ThreeDS2RequestData1,
  threeDS2RequestData1Schema,
} from './threeDS2RequestData1';

export interface CheckoutBalanceCheckRequest {
  /**
   * Shopper account information for 3D Secure 2.
   * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
   */
  accountInfo?: AccountInfo1;
  /**
   * If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).
   * Required to be in the same currency as the `amount`.
   */
  additionalAmount?: Amount1;
  /**
   * This field contains additional data, which may be required for a particular payment request.
   * The `additionalData` object consists of entries, each of which includes the key and value.
   */
  additionalData?: Record<string, string>;
  /** The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero). */
  amount: Amount2;
  /** Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). */
  applicationInfo?: ApplicationInfo1;
  /**
   * The address where to send the invoice.
   * > The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.
   * >* For 3D Secure 2 transactions in all browser-based and mobile implementations.
   * >* For cross-border payouts to and from Canada.
   */
  billingAddress?: Address1;
  /**
   * The shopper's browser information.
   * > For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 1.
   */
  browserInfo?: BrowserInfo1;
  /** The delay between the authorisation and scheduled auto-capture, specified in hours. */
  captureDelayHours?: number;
  /**
   * The shopper's date of birth.
   * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
   */
  dateOfBirth?: string;
  /** The forex quote as returned in the response of the forex service. */
  dccQuote?: ForexQuote2;
  /** The address where the purchased goods should be delivered. */
  deliveryAddress?: Address2;
  /**
   * The date and time the purchased goods should be delivered.
   * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
   * Example: 2017-07-17T13:42:40.428+01:00
   */
  deliveryDate?: string;
  /** A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting). */
  deviceFingerprint?: string;
  /** An integer value that is added to the normal fraud score. The value can be either positive or negative. */
  fraudOffset?: number;
  /** Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments). */
  installments?: Installments2;
  /**
   * This field allows merchants to use dynamic shopper statement in local character sets.
   * The local shopper statement field can be supplied in markets where localized merchant descriptors are used. Currently, Adyen only supports this in the Japanese market
   * .The available character sets at the moment are:
   * * Processing in Japan: **ja-Kana**
   * The character set **ja-Kana** supports UTF-8 based Katakana and alphanumeric and special characters.
   * Merchants should send the Katakana shopperStatement in full-width characters.
   * An example request would be:
   * > {
   *   "shopperStatement" : "ADYEN - SELLER-A",
   *   "localizedShopperStatement" : {
   *     "ja-Kana" : "ADYEN - セラーA"
   *   }
   * }
   * We recommend merchants to always supply the field localizedShopperStatement in addition to the field shopperStatement.It is issuer dependent whether the localized shopper statement field is supported.
   * In the case of non-domestic transactions (e.g. US-issued cards processed in JP) the field `shopperStatement` is used to modify the statement of the shopper.
   * Adyen handles the complexity of ensuring the correct descriptors are assigned.
   */
  localizedShopperStatement?: Record<string, string>;
  /** The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. */
  mcc?: string;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /**
   * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
   * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
   * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
   */
  merchantOrderReference?: string;
  /**
   * Additional risk fields for 3D Secure 2.
   * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
   */
  merchantRiskIndicator?: MerchantRiskIndicator2;
  /**
   * Metadata consists of entries, each of which includes a key and a value.
   * Limits:
   * * Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
   * * Maximum 20 characters per key.
   * * Maximum 80 characters per value.
   */
  metadata?: Record<string, string>;
  /** When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. */
  orderReference?: string;
  /** The collection that contains the type of the payment method and its specific information. */
  paymentMethod: Record<string, string>;
  /** The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments). */
  recurring?: Recurring2;
  /**
   * Defines a recurring payment type.
   * Allowed values:
   * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
   * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel?: RecurringProcessingModelEnum;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
   * Maximum length: 80 characters.
   */
  reference: string;
  /**
   * Some payment methods require defining a value for this field to specify how to process the transaction.
   * For the Bancontact payment method, it can be set to:
   * * `maestro` (default), to be processed like a Maestro card, or
   * * `bcmc`, to be processed like a Bancontact card.
   */
  selectedBrand?: string;
  /** The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail. */
  selectedRecurringDetailReference?: string;
  /** A session ID used to identify a payment session. */
  sessionId?: string;
  /**
   * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
   * > For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations.
   */
  shopperEmail?: string;
  /**
   * The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
   * > For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations.
   * This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).
   */
  shopperIP?: string;
  /**
   * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
   * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
   * This field has the following possible values:
   * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
   * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
   * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
   * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
   */
  shopperInteraction?: ShopperInteractionEnum;
  /** The combination of a language code and a country code to specify the language to be used in the payment. */
  shopperLocale?: string;
  /** The shopper's full name. */
  shopperName?: Name7;
  /**
   * Required for recurring payments.
   * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.
   * > Your reference must not include personally identifiable information (PII), for example name or email address.
   */
  shopperReference?: string;
  /**
   * The text to be shown on the shopper's bank statement.
   *  We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.
   *  Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.
   */
  shopperStatement?: string;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
  /** An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split). */
  splits?: Split[];
  /** The ecommerce or point-of-sale store that is processing the payment. Used in [partner model integrations](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#route-payments) for Adyen for Platforms. */
  store?: string;
  /** The shopper's telephone number. */
  telephoneNumber?: string;
  /** Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation. */
  threeDS2RequestData?: ThreeDS2RequestData1;
  /** If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation. */
  threeDSAuthenticationOnly?: boolean;
  /** The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available). */
  totalsGroup?: string;
  /** Set to true if the payment should be routed to a trusted MID. */
  trustedShopper?: boolean;
}

export const checkoutBalanceCheckRequestSchema: Schema<CheckoutBalanceCheckRequest> = object(
  {
    accountInfo: ['accountInfo', optional(lazy(() => accountInfo1Schema))],
    additionalAmount: ['additionalAmount', optional(lazy(() => amount1Schema))],
    additionalData: ['additionalData', optional(dict(string()))],
    amount: ['amount', lazy(() => amount2Schema)],
    applicationInfo: [
      'applicationInfo',
      optional(lazy(() => applicationInfo1Schema)),
    ],
    billingAddress: ['billingAddress', optional(lazy(() => address1Schema))],
    browserInfo: ['browserInfo', optional(lazy(() => browserInfo1Schema))],
    captureDelayHours: ['captureDelayHours', optional(number())],
    dateOfBirth: ['dateOfBirth', optional(string())],
    dccQuote: ['dccQuote', optional(lazy(() => forexQuote2Schema))],
    deliveryAddress: ['deliveryAddress', optional(lazy(() => address2Schema))],
    deliveryDate: ['deliveryDate', optional(string())],
    deviceFingerprint: ['deviceFingerprint', optional(string())],
    fraudOffset: ['fraudOffset', optional(number())],
    installments: ['installments', optional(lazy(() => installments2Schema))],
    localizedShopperStatement: [
      'localizedShopperStatement',
      optional(dict(string())),
    ],
    mcc: ['mcc', optional(string())],
    merchantAccount: ['merchantAccount', string()],
    merchantOrderReference: ['merchantOrderReference', optional(string())],
    merchantRiskIndicator: [
      'merchantRiskIndicator',
      optional(lazy(() => merchantRiskIndicator2Schema)),
    ],
    metadata: ['metadata', optional(dict(string()))],
    orderReference: ['orderReference', optional(string())],
    paymentMethod: ['paymentMethod', dict(string())],
    recurring: ['recurring', optional(lazy(() => recurring2Schema))],
    recurringProcessingModel: [
      'recurringProcessingModel',
      optional(recurringProcessingModelEnumSchema),
    ],
    reference: ['reference', string()],
    selectedBrand: ['selectedBrand', optional(string())],
    selectedRecurringDetailReference: [
      'selectedRecurringDetailReference',
      optional(string()),
    ],
    sessionId: ['sessionId', optional(string())],
    shopperEmail: ['shopperEmail', optional(string())],
    shopperIP: ['shopperIP', optional(string())],
    shopperInteraction: [
      'shopperInteraction',
      optional(shopperInteractionEnumSchema),
    ],
    shopperLocale: ['shopperLocale', optional(string())],
    shopperName: ['shopperName', optional(lazy(() => name7Schema))],
    shopperReference: ['shopperReference', optional(string())],
    shopperStatement: ['shopperStatement', optional(string())],
    socialSecurityNumber: ['socialSecurityNumber', optional(string())],
    splits: ['splits', optional(array(lazy(() => splitSchema)))],
    store: ['store', optional(string())],
    telephoneNumber: ['telephoneNumber', optional(string())],
    threeDS2RequestData: [
      'threeDS2RequestData',
      optional(lazy(() => threeDS2RequestData1Schema)),
    ],
    threeDSAuthenticationOnly: [
      'threeDSAuthenticationOnly',
      optional(boolean()),
    ],
    totalsGroup: ['totalsGroup', optional(string())],
    trustedShopper: ['trustedShopper', optional(boolean())],
  }
);
