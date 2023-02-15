/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChallengeCancelEnum
 */
export enum ChallengeCancelEnum {
  Enum01 = '01',
  Enum02 = '02',
  Enum03 = '03',
  Enum04 = '04',
  Enum05 = '05',
  Enum06 = '06',
  Enum07 = '07',
}

/**
 * Schema for ChallengeCancelEnum
 */
export const challengeCancelEnumSchema: Schema<ChallengeCancelEnum> = stringEnum(ChallengeCancelEnum);
