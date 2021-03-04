export interface IPayment {
  readonly customer_payment_id: string
  readonly date: string
  readonly amount: number
}

export class Payment {
  readonly customerPaymentId: string
  readonly date: string
  readonly amount: number

  constructor(obj: IPayment) {
    this.customerPaymentId = obj.customer_payment_id
    this.date = obj.date
    this.amount = obj.amount
  }
}
