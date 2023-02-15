/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type1Enum
 */
export enum Type1Enum {
  AfterpayDefault = 'afterpay_default',
  Afterpaytouch = 'afterpaytouch',
  AfterpayB2b = 'afterpay_b2b',
}

/**
 * Schema for Type1Enum
 */
export const type1EnumSchema: Schema<Type1Enum> = stringEnum(Type1Enum);
