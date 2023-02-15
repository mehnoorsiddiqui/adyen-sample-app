/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TokenServiceEnum
 */
export enum TokenServiceEnum {
  VISATOKENSERVICE = 'VISATOKENSERVICE',
  MCTOKENSERVICE = 'MCTOKENSERVICE',
}

/**
 * Schema for TokenServiceEnum
 */
export const tokenServiceEnumSchema: Schema<TokenServiceEnum> = stringEnum(TokenServiceEnum);
