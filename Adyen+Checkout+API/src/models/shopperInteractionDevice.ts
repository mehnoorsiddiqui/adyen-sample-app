/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ShopperInteractionDevice {
  /** Locale on the shopper interaction device. */
  locale?: string;
  /** Operating system running on the shopper interaction device. */
  os?: string;
  /** Version of the operating system on the shopper interaction device. */
  osVersion?: string;
}

export const shopperInteractionDeviceSchema: Schema<ShopperInteractionDevice> = object(
  {
    locale: ['locale', optional(string())],
    os: ['os', optional(string())],
    osVersion: ['osVersion', optional(string())],
  }
);
