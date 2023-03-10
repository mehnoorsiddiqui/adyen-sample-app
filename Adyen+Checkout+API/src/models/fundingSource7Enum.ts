/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FundingSource7Enum
 */
export enum FundingSource7Enum {
  Debit = 'debit',
}

/**
 * Schema for FundingSource7Enum
 */
export const fundingSource7EnumSchema: Schema<FundingSource7Enum> = stringEnum(FundingSource7Enum);
