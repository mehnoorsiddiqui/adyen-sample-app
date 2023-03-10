/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ServiceError } from '../errors/serviceError';
import {
  CardDetailsRequest,
  cardDetailsRequestSchema,
} from '../models/cardDetailsRequest';
import {
  CardDetailsResponse,
  cardDetailsResponseSchema,
} from '../models/cardDetailsResponse';
import {
  CreateCheckoutSessionRequest,
  createCheckoutSessionRequestSchema,
} from '../models/createCheckoutSessionRequest';
import {
  CreateCheckoutSessionResponse,
  createCheckoutSessionResponseSchema,
} from '../models/createCheckoutSessionResponse';
import { DetailsRequest, detailsRequestSchema } from '../models/detailsRequest';
import {
  DonationResponse,
  donationResponseSchema,
} from '../models/donationResponse';
import {
  PaymentDetailsResponse,
  paymentDetailsResponseSchema,
} from '../models/paymentDetailsResponse';
import {
  PaymentDonationRequest,
  paymentDonationRequestSchema,
} from '../models/paymentDonationRequest';
import {
  PaymentMethodsRequest,
  paymentMethodsRequestSchema,
} from '../models/paymentMethodsRequest';
import {
  PaymentMethodsResponse,
  paymentMethodsResponseSchema,
} from '../models/paymentMethodsResponse';
import { PaymentRequest, paymentRequestSchema } from '../models/paymentRequest';
import {
  PaymentResponse,
  paymentResponseSchema,
} from '../models/paymentResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class PaymentsController extends BaseController {
  /**
   * Send a request with at least the first 6 digits of the card number to get a response with an array
   * of brands on the card. If you include [your supported brands](https://docs.adyen.com/api-
   * explorer/#/CheckoutService/latest/post/cardDetails__reqParam_supportedBrands) in the request, the
   * response also tells you if you support each [brand that was identified](https://docs.adyen.com/api-
   * explorer/#/CheckoutService/latest/post/cardDetails__resParam_details).
   *
   * If you have an API-only integration and collect card data, use this endpoint to find out if the
   * shopper's card is co-branded. For co-branded cards, you must let the shopper choose the brand to pay
   * with  if you support both brands.
   *
   *
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum of 64
   *                                                     characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postCardDetails(
    idempotencyKey?: string,
    body?: CardDetailsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CardDetailsResponse>> {
    const req = this.createRequest('POST', '/cardDetails');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(cardDetailsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    return req.callAsJson(cardDetailsResponseSchema, requestOptions);
  }

  /**
   * Takes in the donation token generated by the `/payments` request and uses it to make the donation
   * for the donation account specified in the request.
   *
   * For more information, see [Donations](https://docs.adyen.com/online-payments/donations).
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum of 64
   *                                                         characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postDonations(
    idempotencyKey?: string,
    body?: PaymentDonationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DonationResponse>> {
    const req = this.createRequest('POST', '/donations');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(paymentDonationRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(donationResponseSchema, requestOptions);
  }

  /**
   * Queries the available payment methods for a transaction based on the transaction context (like
   * amount, country, and currency). Besides giving back a list of the available payment methods, the
   * response also returns which input details you need to collect from the shopper (to be submitted to
   * `/payments`).
   *
   * Although we highly recommend using this endpoint to ensure you are always offering the most up-to-
   * date list of payment methods, its usage is optional. You can, for example, also cache the
   * `/paymentMethods` response and update it once a week.
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum of 64
   *                                                        characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postPaymentMethods(
    idempotencyKey?: string,
    body?: PaymentMethodsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentMethodsResponse>> {
    const req = this.createRequest('POST', '/paymentMethods');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(paymentMethodsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(paymentMethodsResponseSchema, requestOptions);
  }

  /**
   * Sends payment parameters (like amount, country, and currency) together with other required input
   * details collected from the shopper. To know more about required parameters for specific payment
   * methods, refer to our [payment method guides](https://docs.adyen.com/payment-methods).
   * The response depends on the [payment flow](https://docs.adyen.com/payment-methods#payment-flow):
   * * For a direct flow, the response includes a `pspReference` and a `resultCode` with the payment
   * result, for example **Authorised** or **Refused**.
   * * For a redirect or additional action, the response contains an `action` object.
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum of 64
   *                                                 characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postPayments(
    idempotencyKey?: string,
    body?: PaymentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentResponse>> {
    const req = this.createRequest('POST', '/payments');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(paymentRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(paymentResponseSchema, requestOptions);
  }

  /**
   * Submits details for a payment created using `/payments`. This step is only needed when no final
   * state has been reached on the `/payments` request, for example when the shopper was redirected to
   * another page to complete the payment.
   *
   *
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum of 64
   *                                                 characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postPaymentsDetails(
    idempotencyKey?: string,
    body?: DetailsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentDetailsResponse>> {
    const req = this.createRequest('POST', '/payments/details');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(detailsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    req.throwOn(400, ServiceError, 'Bad Request - a problem reading or understanding the request.');
    req.throwOn(401, ServiceError, 'Unauthorized - authentication required.');
    req.throwOn(403, ServiceError, 'Forbidden - insufficient permissions to process the request.');
    req.throwOn(422, ServiceError, 'Unprocessable Entity - a request validation error.');
    req.throwOn(500, ServiceError, 'Internal Server Error - the server could not process the request.');
    return req.callAsJson(paymentDetailsResponseSchema, requestOptions);
  }

  /**
   * Creates a payment session for [Web Drop-in](https://docs.adyen.com/online-payments/web-drop-in) and
   * [Web Components](https://docs.adyen.com/online-payments/web-components) integrations.
   *
   * The response contains encrypted payment session data. The front end then uses the session data to
   * make any required server-side calls for the payment flow.
   *
   * You get the payment outcome asynchronously, in an [AUTHORISATION](https://docs.adyen.com/api-
   * explorer/#/Webhooks/latest/post/AUTHORISATION) webhook.
   *
   * @param idempotencyKey  A unique identifier for the message with a maximum
   *                                                               of 64 characters (we recommend a UUID).
   * @param body
   * @return Response from the API call
   */
  async postSessions(
    idempotencyKey?: string,
    body?: CreateCheckoutSessionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCheckoutSessionResponse>> {
    const req = this.createRequest('POST', '/sessions');
    const mapped = req.prepareArgs({
      idempotencyKey: [idempotencyKey, optional(string())],
      body: [body, optional(createCheckoutSessionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('Idempotency-Key', mapped.idempotencyKey);
    req.json(mapped.body);
    return req.callAsJson(createCheckoutSessionResponseSchema, requestOptions);
  }
}
