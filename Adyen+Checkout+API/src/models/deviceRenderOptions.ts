/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema } from '../schema';
import { SdkInterfaceEnum, sdkInterfaceEnumSchema } from './sdkInterfaceEnum';
import { SdkUiTypeEnum, sdkUiTypeEnumSchema } from './sdkUiTypeEnum';

export interface DeviceRenderOptions {
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

export const deviceRenderOptionsSchema: Schema<DeviceRenderOptions> = object({
  sdkInterface: ['sdkInterface', optional(sdkInterfaceEnumSchema)],
  sdkUiType: ['sdkUiType', optional(array(sdkUiTypeEnumSchema))],
});
