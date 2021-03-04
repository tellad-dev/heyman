import { Payment } from '../Payment'
import { Notification } from '../Notification'
import * as Model from '../../models'

export interface ICustomer {
  readonly customerId: string
  readonly customerName: string
  readonly email: string
  readonly phoneNumber: number
  readonly sex: string
  readonly address: string
  readonly birthday: string
  readonly payments: Payment[]
  readonly notifications: Notification[]
}

export class Customer implements ICustomer {
  readonly customerId: string
  readonly customerName: string
  readonly email: string
  readonly phoneNumber: number
  readonly sex: string
  readonly address: string
  readonly birthday: string
  readonly payments: Payment[]
  readonly notifications: Notification[]

  constructor(obj: ICustomer) {
    this.customerId = obj.customerId
    this.customerName = obj.customerName
    this.email = obj.email
    this.phoneNumber = obj.phoneNumber
    this.sex = obj.sex
    this.address = obj.address
    this.birthday = obj.birthday
    this.payments = obj.payments
    this.notifications = obj.notifications
  }

  static createFromApi(obj: Model.Api.Customer): Customer {
    return new Customer({
      customerId: obj.customer_id,
      customerName: obj.customer_name,
      email: obj.email,
      phoneNumber: obj.phone_number,
      sex: obj.sex,
      address: obj.address,
      birthday: obj.birthday,
      payments: obj.payments.map((p) => Payment.createFromApi(p)),
      notifications: obj.notifications.map((n) =>
        Notification.createFromApi(n)
      ),
    })
  }
}
