/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ResultCode1Enum
 */
export enum ResultCode1Enum {
  AuthenticationFinished = 'AuthenticationFinished',
  AuthenticationNotRequired = 'AuthenticationNotRequired',
  Authorised = 'Authorised',
  Cancelled = 'Cancelled',
  ChallengeShopper = 'ChallengeShopper',
  Error = 'Error',
  IdentifyShopper = 'IdentifyShopper',
  Pending = 'Pending',
  PresentToShopper = 'PresentToShopper',
  Received = 'Received',
  RedirectShopper = 'RedirectShopper',
  Refused = 'Refused',
  Success = 'Success',
}

/**
 * Schema for ResultCode1Enum
 */
export const resultCode1EnumSchema: Schema<ResultCode1Enum> = stringEnum(ResultCode1Enum);