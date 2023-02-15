/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type15Enum
 */
export enum Type15Enum {
  EcontextSeveneleven = 'econtext_seveneleven',
  EcontextStores = 'econtext_stores',
}

/**
 * Schema for Type15Enum
 */
export const type15EnumSchema: Schema<Type15Enum> = stringEnum(Type15Enum);
