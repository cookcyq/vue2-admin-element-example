/* 封装一个可以直接调用传递参数就可以拿到类型数据的方法  */

import { all_article_get } from '../../mock/user/index.js'
// 引入已经封装好的接口数据,这个接口数据时时所有文章，我们只针对所有文章进行筛选，不返回所有文章
export function response_result(type, callback) {
  var data = []
  all_article_get()
    .then(res => {
      res.data.data.map(item => {
        if (item.status == type) {
          data.push({
            id: item.id,
            name: item.name,
            title: item.ctitle,
            date: item.date,
            status: item.status
          })
        }
      })
      callback(data)
    })
    .catch(error => {
      console.log('响应错误' + error)
    })
}
