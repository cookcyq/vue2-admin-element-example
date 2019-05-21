import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/layout/index.vue'
import Login from '@/layout/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '主界面',
      component: Home,
      children: [
        {
          path: '/sub-home',
          name: '主页',
          component: () => import('@/views/home/index.vue')
        },

        {
          path: '/add-article',
          name: '添加文章',
          component: () => import('@/views/add-article/index.vue')
        },
        {
          path: '/edit',
          name: '编辑资料',
          component: () => import('@/views/edit/index.vue')
        },
        {
          path: '/show-complete',
          name: '已审批',
          component: () => import('@/views/article-type/show-complete.vue')
        },
        // 文章分类
        {
          path: '/show-all-article',
          name: '所有文章',
          component: () => import('@/views/article-type/show-all-article.vue')
        },
        {
          path: '/show-uncomplete',
          name: '未审批',
          component: () => import('@/views/article-type/show-uncomplete.vue')
        },
        {
          path: '/show-delete',
          name: '已删除',
          component: () => import('@/views/article-type/show-delete.vue')
        },
        {
          path: '/recovery',
          name: '回收站',
          component: () => import('@/views/article-type/recovery.vue')
        },
        {
          path: '/test-mock',
          name: '用于测试，上线时删除即可',
          component: () => import('@/test/test-mock.vue'),
          meta: { isboo: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/getout',
      name: '退出',
      component: Login
    }
  ]
})
