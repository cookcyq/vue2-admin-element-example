/* 返回增 删 改 的cookie */
import Cookie from 'js-cookie'
const name = 'Vue-Token'
export function setCookie(token) {
  Cookie.set(name, token)
}
export function getCookie() {
  return Cookie.get(name)
}
export function removeCookie() {
  Cookie.remove(name)
}
