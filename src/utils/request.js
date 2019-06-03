import axios from 'axios'
import nprogress from 'nprogress'
const req = axios.create({
  // 使用了proxy代理以api代替原来的easy-mock接口， 可以简写，也防止跨域。
  baseURL:
    process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : '/api',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  // baseURL: '/foo'
})

// 请求拦截设置进度条效果
req.interceptors.request.use(
  config => {
    nprogress.set(0.2)
    // 注意： 请求拦截 不可以改变发出请求的url 以及baerURL 否则会报错
    // 可以在请求头添加Token验证，后台就可以通过这个headers来获取A-TOKEN的值，来进行来判断， 一般用于cookie验证用户是否有登陆等
    // config.headers['TO-KEN'] = '设置你的cookie值。' // 值不能是中文
    // config.headers['token'] = 'cookie'
    return config
  },
  error => {
    nprogress.done()
    return Promise.reject(error)
  }
)
req.interceptors.response.use(
  config => {
    nprogress.done()
    return config
  },
  error => {
    nprogress.done()
    return Promise.reject(error)
  }
)

export default req
