import axios from 'axios'
import * as baseConfig from './request.config'

class Request {
  constructor(baseURL, timeout) {
    const instance = axios.create({
      baseURL: baseConfig.default.baseURL,
      timeout: baseConfig.default.timeout
    })

    instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance = instance
  }
  getRequest(url, config) {
    return this.instance.get(url, config)
  }
  postRequest(url, config) {
    return this.instance.post(url, config)
  }
}

export default Request
