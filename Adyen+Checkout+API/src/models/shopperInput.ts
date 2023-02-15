/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  BillingAddressEnum,
  billingAddressEnumSchema,
} from './billingAddressEnum';
import {
  DeliveryAddressEnum,
  deliveryAddressEnumSchema,
} from './deliveryAddressEnum';
import {
  PersonalDetailsEnum,
  personalDetailsEnumSchema,
} from './personalDetailsEnum';

export interface ShopperInput {
  /**
   * Specifies visibility of billing address fields.
   * Permitted values:
   * * editable
   * * hidden
   * * readOnly
   */
  billingAddress?: BillingAddressEnum;
  /**
   * Specifies visibility of delivery address fields.
   * Permitted values:
   * * editable
   * * hidden
   * * readOnly
   */
  deliveryAddress?: DeliveryAddressEnum;
  /**
   * Specifies visibility of personal details.
   * Permitted values:
   * * editable
   * * hidden
   * * readOnly
   */
  personalDetails?: PersonalDetailsEnum;
}

export const shopperInputSchema: Schema<ShopperInput> = object({
  billingAddress: ['billingAddress', optional(billingAddressEnumSchema)],
  deliveryAddress: ['deliveryAddress', optional(deliveryAddressEnumSchema)],
  personalDetails: ['personalDetails', optional(personalDetailsEnumSchema)],
});
