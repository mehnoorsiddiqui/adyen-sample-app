
# Bank Account

## Structure

`BankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `string \| undefined` | Optional | The bank account number (without separators). |
| `bankCity` | `string \| undefined` | Optional | The bank city. |
| `bankLocationId` | `string \| undefined` | Optional | The location id of the bank. The field value is `nil` in most cases. |
| `bankName` | `string \| undefined` | Optional | The name of the bank. |
| `bic` | `string \| undefined` | Optional | The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases. |
| `countryCode` | `string \| undefined` | Optional | Country code where the bank is located.<br><br>A valid value is an ISO two-character country code (e.g. 'NL'). |
| `iban` | `string \| undefined` | Optional | The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN). |
| `ownerName` | `string \| undefined` | Optional | The name of the bank account holder.<br>If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:<br><br>* χ12 is converted to ch12.<br>* üA is converted to euA.<br>* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.<br>  After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:<br>* John17 - allowed.<br>* J17 - allowed.<br>* 171 - not allowed.<br>* John-7 - allowed.<br><br>> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'. |
| `taxId` | `string \| undefined` | Optional | The bank account holder's tax ID. |

## Example (as JSON)

```json
{
  "bankAccountNumber": null,
  "bankCity": null,
  "bankLocationId": null,
  "bankName": null,
  "bic": null,
  "countryCode": null,
  "iban": null,
  "ownerName": null,
  "taxId": null
}
```

