import Request from './request'

export function getRequest(url, config) {
  const request = new Request()
  const res = request.getRequest(url, config)
  return res
}
export function postRequest(url, config) {
  const request = new Request()
  const res = request.postRequest(url, config)
  return res
}
