/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type25Enum
 */
export enum Type25Enum {
  Openinvoice = 'openinvoice',
  AfterpayDirectdebit = 'afterpay_directdebit',
  AtomePos = 'atome_pos',
}

/**
 * Schema for Type25Enum
 */
export const type25EnumSchema: Schema<Type25Enum> = stringEnum(Type25Enum);
