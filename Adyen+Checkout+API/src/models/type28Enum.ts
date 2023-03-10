/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type28Enum
 */
export enum Type28Enum {
  Ratepay = 'ratepay',
  RatepayDirectdebit = 'ratepay_directdebit',
}

/**
 * Schema for Type28Enum
 */
export const type28EnumSchema: Schema<Type28Enum> = stringEnum(Type28Enum);
