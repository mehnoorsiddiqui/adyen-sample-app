/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { BehaviorEnum, behaviorEnumSchema } from './behaviorEnum';

/** Defines the behavior to be applied in case of a chargeback. */
export interface PlatformChargebackLogic1 {
  behavior?: BehaviorEnum;
  targetAccount?: string;
}

export const platformChargebackLogic1Schema: Schema<PlatformChargebackLogic1> = object(
  {
    behavior: ['behavior', optional(behaviorEnumSchema)],
    targetAccount: ['targetAccount', optional(string())],
  }
);