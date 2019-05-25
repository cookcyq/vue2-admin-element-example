import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/layout/index.vue'
import Login from '@/layout/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sub-home'
    },

    {
      path: '/home',
      name: '主界面',
      component: Home,
      redirect: '/home/sub-home', // 主界面上来后 先显示子路由里的主页区域, 也可以以别名的方式来显示
      // isboo用来判断面包屑， 为true 则会在内容前面加上 / ， 主页面是false, 前面则不会加上 /
      meta: { title: '主页', isboo: false },
      children: [
        {
          path: 'sub-home',
          name: 'index',
          component: () => import('@/views/home/index.vue')
        },

        {
          path: 'add-article',
          name: 'add-article',
          component: () => import('@/views/add-article/index.vue'),
          meta: { title: '添加文章', isboo: true }
        },

        {
          path: 'article-type',
          name: 'article-type',
          // 引入一个坑（router-view)， 否则下面的子路由显示不了, 因为它们是根据父路由来渲染组件的
          component: () => import('@/views/article-type/index.vue'),
          meta: { title: '文章分类', isboo: true },
          children: [
            {
              path: 'all-article',
              name: 'all',
              component: () => import('@/views/article-type/all-article/index'),
              meta: { title: '所有文章', isboo: true }
            },
            {
              path: 'complete',
              name: 'complete',
              component: () => import('@/views/article-type/complete/index'),
              meta: { title: '已审批', isboo: true }
            },
            {
              path: 'uncomplete',
              name: 'uncomplete',
              component: () => import('@/views/article-type/uncomplete/index'),
              meta: { title: '未审批', isboo: true }
            },
            {
              path: 'delete',
              name: 'delete',
              component: () => import('@/views/article-type/delete/index'),
              meta: { title: '已删除', isboo: true }
            },
            {
              path: 'recovery',
              name: 'recovery',
              meta: { title: '回收站', isboo: true },
              component: () =>
                import('@/views/article-type/recovery/index.vue'),
              children: [
                {
                  path: 'unclear',
                  name: 'unclear',
                  component: () =>
                    import('@/views/article-type/recovery/unclear/index'),
                  meta: { title: '未清理', isboo: true }
                }
              ]
            }
          ]
        },
        {
          path: 'edit',
          name: 'edit',
          component: () => import('@/views/edit/index.vue'),
          meta: { title: '编辑资料', isboo: true }
        },
        {
          path: '/test-mock',
          name: '测试',
          component: () => import('@/test/test-mock.vue'),
          meta: { title: '测试', isboo: true }
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
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404')
    }
  ]
})
