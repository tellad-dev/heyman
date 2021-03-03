export interface INotification {
  readonly notification_id: number
  readonly received_date: string
  readonly category: number
}

export class Notification {
  readonly notificationId: number
  readonly receivedDate: string
  readonly category: number

  constructor(obj: INotification) {
    this.notificationId = obj.notification_id
    this.receivedDate = obj.received_date
    this.category = obj.category
  }
}
