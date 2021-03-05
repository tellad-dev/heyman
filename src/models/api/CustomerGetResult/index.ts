import { Base } from '../Base'

export interface Payment {
  customer_payment_id: string
  date: string
  amount: number
}

export interface Notification {
  notification_id: number
  received_date: string
  category: number
}

export interface Customer {
  customer_id: string
  customer_name: string
  email: string
  phone_number: number
  sex: string
  address: string
  birthday: string
  payments: Payment[]
  notifications: Notification[]
}

export interface CustomerGetResult extends Base {
  list: Customer[]
}
