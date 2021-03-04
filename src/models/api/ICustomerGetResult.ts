export interface ICustomerGetResult {
  customer_id: string
  customer_name: string
  email: string
  phone_number: number
  sex: string
  address: string
  birthday: string
  payments: IPaymentGetResult[]
  notifications: INotificationGetResult[]
}

export interface IPaymentGetResult {
  customer_payment_id: string
  date: string
  amount: number
}

export interface INotificationGetResult {
  notification_id: number
  received_date: string
  category: number
}
