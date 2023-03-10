/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SdkInterfaceEnum
 */
export enum SdkInterfaceEnum {
  Native = 'native',
  Html = 'html',
  Both = 'both',
}

/**
 * Schema for SdkInterfaceEnum
 */
export const sdkInterfaceEnumSchema: Schema<SdkInterfaceEnum> = stringEnum(SdkInterfaceEnum);
