/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContractEnum
 */
export enum ContractEnum {
  ONECLICK = 'ONECLICK',
  RECURRING = 'RECURRING',
  PAYOUT = 'PAYOUT',
}

/**
 * Schema for ContractEnum
 */
export const contractEnumSchema: Schema<ContractEnum> = stringEnum(ContractEnum);
