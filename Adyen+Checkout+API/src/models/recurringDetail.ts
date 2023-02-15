/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, dict, lazy, object, optional, Schema, string } from '../schema';
import {
  FundingSource7Enum,
  fundingSource7EnumSchema,
} from './fundingSource7Enum';
import { InputDetail, inputDetailSchema } from './inputDetail';
import {
  PaymentMethodGroup2,
  paymentMethodGroup2Schema,
} from './paymentMethodGroup2';
import {
  PaymentMethodIssuer,
  paymentMethodIssuerSchema,
} from './paymentMethodIssuer';
import { StoredDetails2, storedDetails2Schema } from './storedDetails2';

export interface RecurringDetail {
  /** Brand for the selected gift card. For example: plastix, hmclub. */
  brand?: string;
  /** List of possible brands. For example: visa, mc. */
  brands?: string[];
  /** The configuration of the payment method. */
  configuration?: Record<string, string>;
  /** The funding source of the payment method. */
  fundingSource?: FundingSource7Enum;
  /** The group where this payment method belongs to. */
  group?: PaymentMethodGroup2;
  /** All input details to be provided to complete the payment with this payment method. */
  inputDetails?: InputDetail[];
  /** A list of issuers for this payment method. */
  issuers?: PaymentMethodIssuer[];
  /** The displayable name of this payment method. */
  name?: string;
  /** The reference that uniquely identifies the recurring detail. */
  recurringDetailReference?: string;
  /** Contains information on previously stored payment details. */
  storedDetails?: StoredDetails2;
  /** The unique payment method code. */
  type?: string;
}

export const recurringDetailSchema: Schema<RecurringDetail> = object({
  brand: ['brand', optional(string())],
  brands: ['brands', optional(array(string()))],
  configuration: ['configuration', optional(dict(string()))],
  fundingSource: ['fundingSource', optional(fundingSource7EnumSchema)],
  group: ['group', optional(lazy(() => paymentMethodGroup2Schema))],
  inputDetails: [
    'inputDetails',
    optional(array(lazy(() => inputDetailSchema))),
  ],
  issuers: ['issuers', optional(array(lazy(() => paymentMethodIssuerSchema)))],
  name: ['name', optional(string())],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  storedDetails: ['storedDetails', optional(lazy(() => storedDetails2Schema))],
  type: ['type', optional(string())],
});