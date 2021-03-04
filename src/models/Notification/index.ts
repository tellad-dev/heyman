import * as Model from '../../models'

export interface INotification {
  readonly notificationId: number
  readonly receivedDate: string
  readonly category: number
}

export class Notification implements INotification {
  readonly notificationId: number
  readonly receivedDate: string
  readonly category: number

  constructor(obj: INotification) {
    this.notificationId = obj.notificationId
    this.receivedDate = obj.receivedDate
    this.category = obj.category
  }

  static createFromApi(obj: Model.Api.Notification): Notification {
    return new Notification({
      notificationId: obj.notification_id,
      receivedDate: obj.received_date,
      category: obj.category,
    })
  }
}
