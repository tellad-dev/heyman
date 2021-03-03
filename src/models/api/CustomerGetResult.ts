import { PaymentGetResult } from './PaymentGetResult'
import { NotificationGetResult } from './NotificationGetResult'

export interface ICustomerGetResult {
  customer_id: string
  customer_name: string
  email: string
  phone_number: number
  sex: string
  address: string
  birthday: string
  payments: PaymentGetResult[]
  notifications: NotificationGetResult[]
}

export class CustomerGetResult implements ICustomerGetResult {
  customer_id: string
  customer_name: string
  email: string
  phone_number: number
  sex: string
  address: string
  birthday: string
  payments: PaymentGetResult[]
  notifications: NotificationGetResult[]

  constructor(obj: ICustomerGetResult) {
    this.customer_id = obj.customer_id
    this.customer_name = obj.customer_name
    this.email = obj.email
    this.phone_number = obj.phone_number
    this.sex = obj.sex
    this.address = obj.address
    this.birthday = obj.birthday
    this.payments = obj.payments
    this.notifications = obj.notifications
  }
}
