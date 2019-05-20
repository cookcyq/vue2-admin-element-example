import instance from './instance'
// import { convertRESTAPI } from '../util';

/** 所有文章 */
function all_article_get(opts) {
  return instance({
    method: 'get',
    url: '/all-article',
    opts: opts
  })
}

/** 回收站 */
function article_recovery_get(opts) {
  return instance({
    method: 'get',
    url: '/article-recovery',
    opts: opts
  })
}

/** 首页 */
function home_get(opts) {
  return instance({
    method: 'get',
    url: '/home',
    opts: opts
  })
}

/** 未审批 */
function article_uncomplete_get(opts) {
  return instance({
    method: 'get',
    url: '/article-uncomplete',
    opts: opts
  })
}

/** 已审批 */
function article_complete_get(opts) {
  return instance({
    method: 'get',
    url: '/article-complete',
    opts: opts
  })
}

/** 已删除 */
function article_delete_get(opts) {
  return instance({
    method: 'get',
    url: '/article-delete',
    opts: opts
  })
}

export {
  all_article_get,
  article_recovery_get,
  home_get,
  article_uncomplete_get,
  article_complete_get,
  article_delete_get
}
