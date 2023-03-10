/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface InstallmentsNumber {
  /** Maximum number of installments */
  maxNumberOfInstallments: number;
}

export const installmentsNumberSchema: Schema<InstallmentsNumber> = object({
  maxNumberOfInstallments: ['maxNumberOfInstallments', number()],
});
