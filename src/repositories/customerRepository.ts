import { AxiosResponse } from 'axios'
import Repository from './Repository'

const version = '/v1'
const resource = '/store/customer'

export default {
  get: (): Promise<AxiosResponse<unknown>> => {
    return Repository.get(`${version}${resource}`)
  },
}
