
# Fraud Result 1

The fraud result properties of the payment.

## Structure

`FraudResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountScore` | `number` | Required | The total fraud score generated by the risk checks. |
| `results` | [`FraudCheckResult[] \| undefined`](../../doc/models/fraud-check-result.md) | Optional | The result of the individual risk checks. |

## Example (as JSON)

```json
{
  "accountScore": 192,
  "results": null
}
```

