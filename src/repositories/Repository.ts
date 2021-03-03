import axios from 'axios'

const baseDomain = 'http://localhost:1333'
const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL,
})
