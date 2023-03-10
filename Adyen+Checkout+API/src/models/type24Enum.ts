/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type24Enum
 */
export enum Type24Enum {
  MolpayEbankingFpxMY = 'molpay_ebanking_fpx_MY',
  MolpayEbankingTH = 'molpay_ebanking_TH',
}

/**
 * Schema for Type24Enum
 */
export const type24EnumSchema: Schema<Type24Enum> = stringEnum(Type24Enum);
