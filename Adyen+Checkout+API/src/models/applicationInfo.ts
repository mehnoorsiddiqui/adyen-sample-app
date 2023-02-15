/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { CommonField1, commonField1Schema } from './commonField1';
import { CommonField2, commonField2Schema } from './commonField2';
import { CommonField4, commonField4Schema } from './commonField4';
import {
  ExternalPlatform2,
  externalPlatform2Schema,
} from './externalPlatform2';
import { MerchantDevice2, merchantDevice2Schema } from './merchantDevice2';
import {
  ShopperInteractionDevice2,
  shopperInteractionDevice2Schema,
} from './shopperInteractionDevice2';

export interface ApplicationInfo {
  /** Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc. */
  adyenLibrary?: CommonField4;
  /** Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc. */
  adyenPaymentSource?: CommonField1;
  /** Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc. */
  externalPlatform?: ExternalPlatform2;
  /** Merchant developed software, such as cashier application, used to interact with the Adyen API. */
  merchantApplication?: CommonField2;
  /** Merchant device information. */
  merchantDevice?: MerchantDevice2;
  /** Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests. */
  shopperInteractionDevice?: ShopperInteractionDevice2;
}

export const applicationInfoSchema: Schema<ApplicationInfo> = object({
  adyenLibrary: ['adyenLibrary', optional(lazy(() => commonField4Schema))],
  adyenPaymentSource: [
    'adyenPaymentSource',
    optional(lazy(() => commonField1Schema)),
  ],
  externalPlatform: [
    'externalPlatform',
    optional(lazy(() => externalPlatform2Schema)),
  ],
  merchantApplication: [
    'merchantApplication',
    optional(lazy(() => commonField2Schema)),
  ],
  merchantDevice: [
    'merchantDevice',
    optional(lazy(() => merchantDevice2Schema)),
  ],
  shopperInteractionDevice: [
    'shopperInteractionDevice',
    optional(lazy(() => shopperInteractionDevice2Schema)),
  ],
});