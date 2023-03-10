import { AdditionalData } from "./additionalData";
import { Amount } from "./amount";

export class NotificationRequestItem {
    "additionalData"?: AdditionalData;
    "amount": Amount;
    /**
    * Adyen\'s 16-character unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
    */
    "pspReference": string;
    /**
    * The type of event the notification item refers to. When eventCode returns AUTHORISATION, it does not necessarily mean that the payment authorisation request has been successfully processed. The authorisation is successful if success = true. If success = false, check the  the reason value for further information on the authorisation failure cause. This can occur, for example, if an error occurs or if the transaction is refused.
    */
    "eventCode": NotificationRequestItem.EventCodeEnum;
    /**
    * The time when the event was generated.
    */
    "eventDate": string;
    /**
    * The merchant account identifier used in the transaction the notification item refers to.
    */
    "merchantAccountCode": string;
    /**
    * This field holds a list of the modification operations supported by the transaction the notification item refers to. The available operations in the list give information on the follow-up actions concerning the payment. You may be requested to: Capture the payment (for example, if auto-capture is not set up), Cancel the payment (if the payment has not been captured yet), or Refund the payment (if the payment has already been captured).
    */
    "operations"?: NotificationRequestItem.OperationsEnum[];
    /**
    *   A reference to uniquely identify the payment.This reference is used in all communication with you about the payment status.We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, you can enter them in this field. Separate each reference value with a hyphen character (\'-\'). This field has a length restriction: you can enter max. 80 characters.
    */
    "merchantReference": string;
    /**
    * If the notification item is about a payment authorisation, this field is not populated and is blank. If the notification item is about a modification, the originalReference value corresponds to the payment request assigned to the original payment.
    */
    "originalReference"?: string;
    /**
    * The payment method used in the transaction the notification item refers to.
    */
    "paymentMethod"?: string;
    /**
    * This field holds plain text. For more information, refer to the reason field values below.
    */
    "reason"?: string;
    /**
    * Informs about the outcome of the event ( eventCode ) the notification refers to. true: the event ( eventCode ) the notification refers to was executed successfully. false: the event was not executed successfully.
    */
    "success": NotificationRequestItem.SuccessEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "AdditionalData"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "eventCode",
            "baseName": "eventCode",
            "type": "NotificationRequestItem.EventCodeEnum"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "string"
        },
        {
            "name": "merchantAccountCode",
            "baseName": "merchantAccountCode",
            "type": "string"
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<NotificationRequestItem.OperationsEnum>"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "NotificationRequestItem.SuccessEnum"
        }    ];

    static getAttributeTypeMap() {
        return NotificationRequestItem.attributeTypeMap;
    }
}

export namespace NotificationRequestItem {
    export enum EventCodeEnum {
        AUTHORISATION = "AUTHORISATION" as any,
        AUTHORISATIONADJUSTMENT = "AUTHORISATION_ADJUSTMENT" as any,
        CANCELLATION = "CANCELLATION" as any,
        CANCELORREFUND = "CANCEL_OR_REFUND" as any,
        CAPTURE = "CAPTURE" as any,
        CAPTUREFAILED = "CAPTURE_FAILED" as any,
        HANDLEDEXTERNALLY = "HANDLED_EXTERNALLY" as any,
        ORDEROPENED = "ORDER_OPENED" as any,
        ORDERCLOSED = "ORDER_CLOSED" as any,
        PENDING = "PENDING" as any,
        PROCESSRETRY = "PROCESS_RETRY" as any,
        REFUND = "REFUND" as any,
        REFUNDFAILED = "REFUND_FAILED" as any,
        REFUNDEDREVERSED = "REFUNDED_REVERSED" as any,
        REFUNDWITHDATA = "REFUND_WITH_DATA" as any,
        REPORTAVAILABLE = "REPORT_AVAILABLE" as any,
        VOIDPENDINGREFUND = "VOID_PENDING_REFUND" as any,
        CHARGEBACK = "CHARGEBACK" as any,
        CHARGEBACKREVERSED = "CHARGEBACK_REVERSED" as any,
        NOTIFICATIONOFCHARGEBACK = "NOTIFICATION_OF_CHARGEBACK" as any,
        NOTIFICATIONOFFRAUD = "NOTIFICATION_OF_FRAUD" as any,
        PREARBITRATIONLOST = "PREARBITRATION_LOST" as any,
        PREARBITRATIONWON = "PREARBITRATION_WON" as any,
        REQUESTFORINFORMATION = "REQUEST_FOR_INFORMATION" as any,
        SECONDCHARGEBACK = "SECOND_CHARGEBACK" as any,
        PAYOUTEXPIRE = "PAYOUT_EXPIRE" as any,
        PAYOUTDECLINE = "PAYOUT_DECLINE" as any,
        PAYOUTTHIRDPARTY = "PAYOUT_THIRDPARTY" as any,
        PAIDOUTREVERSED = "PAIDOUT_REVERSED" as any,
        AUTORESCUE = "AUTORESCUE" as any,
        CANCELAUTORESCUE = "CANCEL_AUTORESCUE" as any,
        RECURRINGCONTRACT = "RECURRING_CONTRACT" as any,
        POSTPONEDREFUND = "POSTPONED_REFUND" as any,
        OFFERCLOSED = "OFFER_CLOSED" as any,
        MANUALREVIEWACCEPT = "MANUAL_REVIEW_ACCEPT" as any,
        MANUALREVIEWREJECT = "MANUAL_REVIEW_REJECT" as any
    }
    export enum OperationsEnum {
        CANCEL = "CANCEL" as any,
        CAPTURE = "CAPTURE" as any,
        REFUND = "REFUND" as any
    }
    export enum SuccessEnum {
        True = "true" as any,
        False = "false" as any
    }
}
