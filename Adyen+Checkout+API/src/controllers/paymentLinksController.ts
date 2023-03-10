/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ServiceError } from '../errors/serviceError';
import {
  CreatePaymentLinkRequest,
  createPaymentLinkRequestSchema,
} from '../models/createPaymentLinkRequest';
import {
  PaymentLinkResponse,
  paymentLinkResponseSchema,
} from '../models/paymentLinkResponse';
import {
  UpdatePaymentLinkRequest,
  updatePaymentLinkRequestSchema,
} from '../models/updatePaymentLinkRequest';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class PaymentLinksController extends BaseController {
  /**
   * Creates a payment link to our hosted payment form where shoppers can pay. The list of payment
   * methods presented to the shopper depends on the `currency` and `country` parameters sent in the
   * request.
   *
   * For more information, refer to [Pay by Link documentation](https://docs.adyen.com/online-
   * payments/pay-by-link#create-payment-links-through-api).
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum of
   *                                                           64 characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postPaymentLinks(
    idempotencyKey?: string,
    body?: CreatePaymentLinkRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentLinkResponse>> {
    const req = this.createRequest('POST', '/paymentLinks');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(createPaymentLinkRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(paymentLinkResponseSchema, requestOptions);
  }

  /**
   * Retrieves the payment link details using the payment link `id`.
   *
   * @param linkId Unique identifier of the payment link.
   * @return Response from the API call
   */
  async getPaymentLinksLinkId(
    linkId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentLinkResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ linkId: [linkId, string()] });
    req.appendTemplatePath`/paymentLinks/${mapped.linkId}`;
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(paymentLinkResponseSchema, requestOptions);
  }

  /**
   * Updates the status of a payment link. Use this endpoint to [force the expiry of a payment
   * link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).
   *
   * @param linkId       Unique identifier of the payment link.
   * @param body
   * @return Response from the API call
   */
  async patchPaymentLinksLinkId(
    linkId: string,
    body?: UpdatePaymentLinkRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentLinkResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      linkId: [linkId, string()],
      body: [body, optional(updatePaymentLinkRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/paymentLinks/${mapped.linkId}`;
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(paymentLinkResponseSchema, requestOptions);
  }
}
