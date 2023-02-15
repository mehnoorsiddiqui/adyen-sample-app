/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type30Enum
 */
export enum Type30Enum {
  Sepadirectdebit = 'sepadirectdebit',
  SepadirectdebitAmazonpay = 'sepadirectdebit_amazonpay',
}

/**
 * Schema for Type30Enum
 */
export const type30EnumSchema: Schema<Type30Enum> = stringEnum(Type30Enum);