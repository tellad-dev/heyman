export interface INotificationGetResult {
  notification_id: number
  received_date: string
  category: number
}

export class NotificationGetResult implements INotificationGetResult {
  notification_id: number
  received_date: string
  category: number

  constructor(obj: INotificationGetResult) {
    this.notification_id = obj.notification_id
    this.received_date = obj.received_date
    this.category = obj.category
  }
}
