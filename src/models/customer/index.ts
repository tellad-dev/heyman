import { Payment } from '../Payment'
import { Notification } from '../Notification'

export interface ICustomer {
  readonly customer_id: string
  readonly customer_name: string
  readonly email: string
  readonly phone_number: number
  readonly sex: string
  readonly address: string
  readonly birthday: string
  readonly payments: Payment[]
  readonly notifications: Notification[]
}

export class Customer {
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
    this.customerId = obj.customer_id
    this.customerName = obj.customer_name
    this.email = obj.email
    this.phoneNumber = obj.phone_number
    this.sex = obj.sex
    this.address = obj.address
    this.birthday = obj.birthday
    this.payments = obj.payments
    this.notifications = obj.notifications
  }
}
