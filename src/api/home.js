import axios from '@/utils/request.js'
export function home() {
  return axios({
    url: '/home',
    method: 'get'
  })
}
