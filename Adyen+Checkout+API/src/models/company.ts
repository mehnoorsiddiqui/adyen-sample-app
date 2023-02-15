/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Company {
  /** The company website's home page. */
  homepage?: string;
  /** The company name. */
  name?: string;
  /** Registration number of the company. */
  registrationNumber?: string;
  /** Registry location of the company. */
  registryLocation?: string;
  /** Tax ID of the company. */
  taxId?: string;
  /** The company type. */
  type?: string;
}

export const companySchema: Schema<Company> = object({
  homepage: ['homepage', optional(string())],
  name: ['name', optional(string())],
  registrationNumber: ['registrationNumber', optional(string())],
  registryLocation: ['registryLocation', optional(string())],
  taxId: ['taxId', optional(string())],
  type: ['type', optional(string())],
});