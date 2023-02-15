/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RequiredShopperFieldEnum
 */
export enum RequiredShopperFieldEnum {
  BillingAddress = 'billingAddress',
  DeliveryAddress = 'deliveryAddress',
  ShopperEmail = 'shopperEmail',
  ShopperName = 'shopperName',
  TelephoneNumber = 'telephoneNumber',
}

/**
 * Schema for RequiredShopperFieldEnum
 */
export const requiredShopperFieldEnumSchema: Schema<RequiredShopperFieldEnum> = stringEnum(RequiredShopperFieldEnum);
