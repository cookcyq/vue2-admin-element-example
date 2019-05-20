import axios from '@/utils/request.js'
export function allArticle() {
  return axios({
    url: '/all-article',
    method: 'get'
  })
}
