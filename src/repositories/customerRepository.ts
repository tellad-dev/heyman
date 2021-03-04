import { AxiosResponse } from 'axios'
import Repository from './Repository'

const version = '/v1'
const resource = '/store/customer'

export default {
  get: <T>(): Promise<AxiosResponse<T>> => {
    return Repository.get(`${version}${resource}`)
  },
}
