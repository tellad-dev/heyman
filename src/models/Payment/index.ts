export interface IPayment {
  readonly customerPaymentId: string
  readonly date: string
  readonly amount: number
}

export class Payment implements IPayment {
  readonly customerPaymentId: string
  readonly date: string
  readonly amount: number

  constructor(obj: IPayment) {
    this.customerPaymentId = obj.customerPaymentId
    this.date = obj.date
    this.amount = obj.amount
  }
}
