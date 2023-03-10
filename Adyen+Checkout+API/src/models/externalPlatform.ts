/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ExternalPlatform {
  /** External platform integrator. */
  integrator?: string;
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
}

export const externalPlatformSchema: Schema<ExternalPlatform> = object({
  integrator: ['integrator', optional(string())],
  name: ['name', optional(string())],
  version: ['version', optional(string())],
});
