export interface ICustomer {
  readonly id: number
  readonly name: string
}

export class Customer implements ICustomer {
  readonly id: number
  readonly name: string

  constructor(obj: ICustomer) {
    this.id = obj.id
    this.name = obj.name
  }
}
