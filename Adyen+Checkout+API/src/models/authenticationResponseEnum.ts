/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AuthenticationResponseEnum
 */
export enum AuthenticationResponseEnum {
  Y = 'Y',
  N = 'N',
  U = 'U',
  A = 'A',
}

/**
 * Schema for AuthenticationResponseEnum
 */
export const authenticationResponseEnumSchema: Schema<AuthenticationResponseEnum> = stringEnum(AuthenticationResponseEnum);
