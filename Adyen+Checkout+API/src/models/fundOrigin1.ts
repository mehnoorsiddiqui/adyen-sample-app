/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Address3, address3Schema } from './address3';
import { Name1, name1Schema } from './name1';

/** The person or entity funding the money. */
export interface FundOrigin1 {
  /** The address where to send the invoice. */
  billingAddress?: Address3;
  /** The name of the person */
  shopperName?: Name1;
}

export const fundOrigin1Schema: Schema<FundOrigin1> = object({
  billingAddress: ['billingAddress', optional(lazy(() => address3Schema))],
  shopperName: ['shopperName', optional(lazy(() => name1Schema))],
});
