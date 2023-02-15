/**
* The additionalData object is a generic container that can hold extra fields. For more information, refer to NotificationRequestItem.additionalData .
*/
export class AdditionalData {
  /**
  * The ID that uniquely identifies the shopper. This shopperReference is the same as the shopperReference used in the initial payment.
  */
  "shopperReference"?: string;
  /**
  *   The shopper\'s email address.
  */
  "shopperEmail"?: string;
  /**
  * Authorisation code: When the payment is authorised successfully, this field holds the authorisation code for the payment. When the payment is not authorised, this field is empty.
  */
  "authCode"?: string;
  /**
  * Returns the last 4 digits of the credit card.
  */
  "cardSummary"?: string;
  /**
  * Returns the card expiry date.
  */
  "expiryDate"?: string;
  /**
  * Value of the amount authorised.
  */
  "authorisedAmountValue"?: string;
  /**
  * Currency of the authorised amount.
  */
  "authorisedAmountCurrency"?: string;
  /**
  * HMAC Key from customer area
  */
  "hmacSignature"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
      {
          "name": "shopperReference",
          "baseName": "shopperReference",
          "type": "string"
      },
      {
          "name": "shopperEmail",
          "baseName": "shopperEmail",
          "type": "string"
      },
      {
          "name": "authCode",
          "baseName": "authCode",
          "type": "string"
      },
      {
          "name": "cardSummary",
          "baseName": "cardSummary",
          "type": "string"
      },
      {
          "name": "expiryDate",
          "baseName": "expiryDate",
          "type": "string"
      },
      {
          "name": "authorisedAmountValue",
          "baseName": "authorisedAmountValue",
          "type": "string"
      },
      {
          "name": "authorisedAmountCurrency",
          "baseName": "authorisedAmountCurrency",
          "type": "string"
      },
      {
          "name": "hmacSignature",
          "baseName": "hmacSignature",
          "type": "string"
      }    ];

  static getAttributeTypeMap() {
      return AdditionalData.attributeTypeMap;
  }
}
