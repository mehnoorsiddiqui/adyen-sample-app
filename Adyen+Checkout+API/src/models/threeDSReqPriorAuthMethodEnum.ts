/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ThreeDSReqPriorAuthMethodEnum
 */
export enum ThreeDSReqPriorAuthMethodEnum {
  Enum01 = '01',
  Enum02 = '02',
  Enum03 = '03',
  Enum04 = '04',
}

/**
 * Schema for ThreeDSReqPriorAuthMethodEnum
 */
export const threeDSReqPriorAuthMethodEnumSchema: Schema<ThreeDSReqPriorAuthMethodEnum> = stringEnum(ThreeDSReqPriorAuthMethodEnum);
