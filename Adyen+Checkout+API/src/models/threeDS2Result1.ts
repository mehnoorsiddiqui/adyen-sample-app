/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  ChallengeCancelEnum,
  challengeCancelEnumSchema,
} from './challengeCancelEnum';
import {
  ChallengeIndicator1Enum,
  challengeIndicator1EnumSchema,
} from './challengeIndicator1Enum';
import {
  ExemptionIndicatorEnum,
  exemptionIndicatorEnumSchema,
} from './exemptionIndicatorEnum';

/** Result of the 3D Secure 2 authentication. */
export interface ThreeDS2Result1 {
  /** The `authenticationValue` value as defined in the 3D Secure 2 specification. */
  authenticationValue?: string;
  /** The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations. */
  cavvAlgorithm?: string;
  /** Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata). */
  challengeCancel?: ChallengeCancelEnum;
  /**
   * Specifies a preference for receiving a challenge from the issuer.
   * Allowed values:
   * * `noPreference`
   * * `requestNoChallenge`
   * * `requestChallenge`
   * * `requestChallengeAsMandate`
   */
  challengeIndicator?: ChallengeIndicator1Enum;
  /** The `dsTransID` value as defined in the 3D Secure 2 specification. */
  dsTransID?: string;
  /** The `eci` value as defined in the 3D Secure 2 specification. */
  eci?: string;
  /**
   * Indicates the exemption type that was applied by the issuer to the authentication, if exemption applied.
   * Allowed values:
   * * `lowValue`
   * * `secureCorporate`
   * * `trustedBeneficiary`
   * * `transactionRiskAnalysis`
   */
  exemptionIndicator?: ExemptionIndicatorEnum;
  /** The `messageVersion` value as defined in the 3D Secure 2 specification. */
  messageVersion?: string;
  /** Risk score calculated by Cartes Bancaires Directory Server (DS). */
  riskScore?: string;
  /** The `threeDSServerTransID` value as defined in the 3D Secure 2 specification. */
  threeDSServerTransID?: string;
  /** The `timestamp` value of the 3D Secure 2 authentication. */
  timestamp?: string;
  /** The `transStatus` value as defined in the 3D Secure 2 specification. */
  transStatus?: string;
  /** Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values). */
  transStatusReason?: string;
  /** The `whiteListStatus` value as defined in the 3D Secure 2 specification. */
  whiteListStatus?: string;
}

export const threeDS2Result1Schema: Schema<ThreeDS2Result1> = object({
  authenticationValue: ['authenticationValue', optional(string())],
  cavvAlgorithm: ['cavvAlgorithm', optional(string())],
  challengeCancel: ['challengeCancel', optional(challengeCancelEnumSchema)],
  challengeIndicator: [
    'challengeIndicator',
    optional(challengeIndicator1EnumSchema),
  ],
  dsTransID: ['dsTransID', optional(string())],
  eci: ['eci', optional(string())],
  exemptionIndicator: [
    'exemptionIndicator',
    optional(exemptionIndicatorEnumSchema),
  ],
  messageVersion: ['messageVersion', optional(string())],
  riskScore: ['riskScore', optional(string())],
  threeDSServerTransID: ['threeDSServerTransID', optional(string())],
  timestamp: ['timestamp', optional(string())],
  transStatus: ['transStatus', optional(string())],
  transStatusReason: ['transStatusReason', optional(string())],
  whiteListStatus: ['whiteListStatus', optional(string())],
});
