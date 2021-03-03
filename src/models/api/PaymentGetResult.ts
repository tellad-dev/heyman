export interface IPaymentGetResult {
  customer_payment_id: number
  date: string
  amount: number
}

export class PaymentGetResult implements IPaymentGetResult {
  customer_payment_id: number
  date: string
  amount: number

  constructor(obj: IPaymentGetResult) {
    this.customer_payment_id = obj.customer_payment_id
    this.date = obj.date
    this.amount = obj.amount
  }
}
