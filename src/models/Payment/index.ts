import * as Model from '../../models'

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

  static createFromApi(obj: Model.Api.Payment): Payment {
    return new Payment({
      customerPaymentId: obj.customer_payment_id,
      date: obj.date,
      amount: obj.amount,
    })
  }
}
