/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ListStoredPaymentMethodsResponse,
  listStoredPaymentMethodsResponseSchema,
} from '../models/listStoredPaymentMethodsResponse';
import {
  StoredPaymentMethodResource,
  storedPaymentMethodResourceSchema,
} from '../models/storedPaymentMethodResource';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class RecurringController extends BaseController {
  /**
   * Lists the tokens for stored payment details for the shopper identified in the path, if there are any
   * available. The token ID can be used with payment requests for the shopper's payment. A summary of
   * the stored details is included.
   *
   *
   *
   * @param shopperReference Your reference to uniquely identify this shopper, for example user ID or
   *                                   account ID. Minimum length: 3 characters. > Your reference must not include
   *                                   personally identifiable information (PII), for example name or email address.
   * @param merchantAccount  Your merchant account.
   * @return Response from the API call
   */
  async getStoredPaymentMethods(
    shopperReference?: string,
    merchantAccount?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListStoredPaymentMethodsResponse>> {
    const req = this.createRequest('GET', '/storedPaymentMethods');
    const mapped = req.prepareArgs({
      shopperReference: [shopperReference, optional(string())],
      merchantAccount: [merchantAccount, optional(string())],
    });
    req.query('shopperReference', mapped.shopperReference);
    req.query('merchantAccount', mapped.merchantAccount);
    return req.callAsJson(
      listStoredPaymentMethodsResponseSchema,
      requestOptions
    );
  }

  /**
   * Deletes the token identified in the path. The token can no longer be used with payment requests.
   *
   * @param recurringId      The unique identifier of the token.
   * @param shopperReference Your reference to uniquely identify this shopper, for example user ID or
   *                                   account ID. Minimum length: 3 characters. > Your reference must not include
   *                                   personally identifiable information (PII), for example name or email address.
   * @param merchantAccount  Your merchant account.
   * @return Response from the API call
   */
  async deleteStoredPaymentMethodsRecurringId(
    recurringId: string,
    shopperReference?: string,
    merchantAccount?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StoredPaymentMethodResource>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      recurringId: [recurringId, string()],
      shopperReference: [shopperReference, optional(string())],
      merchantAccount: [merchantAccount, optional(string())],
    });
    req.query('shopperReference', mapped.shopperReference);
    req.query('merchantAccount', mapped.merchantAccount);
    req.appendTemplatePath`/storedPaymentMethods/${mapped.recurringId}`;
    return req.callAsJson(storedPaymentMethodResourceSchema, requestOptions);
  }
}