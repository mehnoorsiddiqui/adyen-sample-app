/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DeliveryTimeframeEnum
 */
export enum DeliveryTimeframeEnum {
  ElectronicDelivery = 'electronicDelivery',
  SameDayShipping = 'sameDayShipping',
  OvernightShipping = 'overnightShipping',
  TwoOrMoreDaysShipping = 'twoOrMoreDaysShipping',
}

/**
 * Schema for DeliveryTimeframeEnum
 */
export const deliveryTimeframeEnumSchema: Schema<DeliveryTimeframeEnum> = stringEnum(DeliveryTimeframeEnum);
