export interface INotification {
  readonly notificationId: number
  readonly receivedDate: string
  readonly category: number
}

export class Notification {
  readonly notificationId: number
  readonly receivedDate: string
  readonly category: number

  constructor(obj: INotification) {
    this.notificationId = obj.notificationId
    this.receivedDate = obj.receivedDate
    this.category = obj.category
  }
}
