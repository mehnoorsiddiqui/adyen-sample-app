/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema } from '../schema';
import { SdkInterfaceEnum, sdkInterfaceEnumSchema } from './sdkInterfaceEnum';
import { SdkUiTypeEnum, sdkUiTypeEnumSchema } from './sdkUiTypeEnum';

/**
 * Display options for the 3D Secure 2 SDK.
 * Optional and only for `deviceChannel` **app**.
 */
export interface DeviceRenderOptions2 {
  /**
   * Supported SDK interface types.
   * Allowed values:
   * * native
   * * html
   * * both
   */
  sdkInterface?: SdkInterfaceEnum;
  /**
   * UI types supported for displaying specific challenges.
   * Allowed values:
   * * text
   * * singleSelect
   * * outOfBand
   * * otherHtml
   * * multiSelect
   */
  sdkUiType?: SdkUiTypeEnum[];
}

export const deviceRenderOptions2Schema: Schema<DeviceRenderOptions2> = object({
  sdkInterface: ['sdkInterface', optional(sdkInterfaceEnumSchema)],
  sdkUiType: ['sdkUiType', optional(array(sdkUiTypeEnumSchema))],
});
