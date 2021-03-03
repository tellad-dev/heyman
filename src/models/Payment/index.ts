export interface IPayment {
  readonly customer_payment_id: number
  readonly date: string
  readonly amount: number
}

export class Payment {
  readonly customerPaymentId: number
  readonly date: string
  readonly amount: number

  constructor(obj: IPayment) {
    this.customerPaymentId = obj.customer_payment_id
    this.date = obj.date
    this.amount = obj.amount
  }
}
