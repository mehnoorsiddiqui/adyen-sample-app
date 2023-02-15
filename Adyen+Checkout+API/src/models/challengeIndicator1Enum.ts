/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChallengeIndicator1Enum
 */
export enum ChallengeIndicator1Enum {
  NoPreference = 'noPreference',
  RequestNoChallenge = 'requestNoChallenge',
  RequestChallenge = 'requestChallenge',
  RequestChallengeAsMandate = 'requestChallengeAsMandate',
}

/**
 * Schema for ChallengeIndicator1Enum
 */
export const challengeIndicator1EnumSchema: Schema<ChallengeIndicator1Enum> = stringEnum(ChallengeIndicator1Enum);
