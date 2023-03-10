/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IndustryUsage1Enum
 */
export enum IndustryUsage1Enum {
  DelayedCharge = 'delayedCharge',
  Installment = 'installment',
  NoShow = 'noShow',
}

/**
 * Schema for IndustryUsage1Enum
 */
export const industryUsage1EnumSchema: Schema<IndustryUsage1Enum> = stringEnum(IndustryUsage1Enum);
