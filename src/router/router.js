import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'
Vue.use(Router)
/******路由说明：
 *  这里的路由设计将会影响到 侧边栏的菜单信息，
 * 侧边栏通过递归的形式来拿到路由的内容并展示菜单，
 * 节省每次手动改，只需要在路由设计中改一下即可实时更新
 *  1. 我们将每个根路由都的组件都放在第一个children
 *  2. 如果该侧边栏菜单根路由里面还想放二级路由， 那么当前的根路由就不需要有children， 也不需要放入组件，它只是一个显示和展开的按钮
 *     所以需要将当前的根路由的children替换成你的二级路由组件信息，
 *     然后根路由自己在外面在新增一个meta作为按钮内容和图案即可
 *
 *  3. meta对象的属性作用：
 *    title: 侧边栏从这里拿到内容作为按钮
 *    icon: 在侧边栏按钮前面加上图案
 *    hidden: hidden是用来防止侧边栏根路由菜单文字隐藏时 文字不消失问题。 只有一级路由里面还有嵌套路由时才会出现的问题，
 *            所以只要有嵌套路由的，在根路由都要加上hidden：false
 *            提示： 我们可以不用在根路由手动加上Hidden：false， 因为其他地方动态强行设置了hidden，不过为了代码的结构清晰，
 *                    建议手动加上hidden: false
 *  4. meta对象的用处：
 *    1. 递归侧边栏用到
 *    2. 面包屑用到
 *
 *  注意: 一个根路由如果要定义二级路由，那么二级路由必须保证有2个以上，这样才能保存原来根路由的信息，
 *        如果只有一个二级路由， 那么这个二级路由就会作为当前的跟陆幽覆盖原先的根路由
 *        这个有利有弊。一方便是如果只有一个二级路由确实没必要还有根路由，
 *        不过有些确实需要一个根路由下面还有一个二级路由这样的信息  TODO： 目前还未完成这个功能
 *
 */
const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      // 主界面上来后 先显示子路由里的主页区域
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
          meta: { title: '主页', icon: 'el-icon-s-home' }
        }
      ]
    },

    {
      path: '/article-type',
      // 面包屑点击文章分类时进行重定向到【所有文章】，防止空白页，所有文章分类只是一个占位符
      redirect: '/article-type/all-article',
      // （已弃用）引入一个坑（router-view)， 否则下面的子路由显示不了, 因为它们是根据父路由来渲染组件的
      // 这里只要将layout布局重新放到组件里就不需要自己重新新建一个文件来留坑
      component: Layout,
      meta: {
        title: '文章分类',
        icon: 'el-icon-document',
        hidden: false
      },
      children: [
        {
          path: 'all-article',
          name: 'all-article',
          component: () => import('@/views/article-type/all-article/index'),
          meta: { title: '所有文章' }
        },
        {
          path: 'complete',
          name: 'complete',
          component: () => import('@/views/article-type/complete/index'),
          meta: { title: '已审批' }
        },
        {
          path: 'uncomplete',
          name: 'uncomplete',
          component: () => import('@/views/article-type/uncomplete/index'),
          meta: { title: '未审批' }
        },
        {
          path: 'delete',
          name: 'delete',
          component: () => import('@/views/article-type/delete/index'),
          meta: { title: '已删除' }
        },
        {
          path: 'recovery',
          redirect: '/article-type/recovery/unclear',
          meta: { title: '回收站', icon: 'el-icon-delete-solid' },
          // 这里需要留坑， 去掉后下面子路由就显示不出来
          component: () => import('@/views/article-type/recovery/index.vue'),
          children: [
            {
              path: 'unclear',
              name: 'unclear',
              component: () =>
                import('@/views/article-type/recovery/unclear/index'),
              meta: { title: '未清理' }
            },
            {
              path: 'unclear2',
              name: 'unclear2',
              component: () =>
                import('@/views/article-type/recovery/unclear/index'),
              meta: { title: '未清理2' }
            }
          ]
        }
      ]
    },
    {
      path: '/add-article',
      component: Layout,
      redirect: '/add-article/index',
      meta: { title: '添加文章', icon: 'el-icon-plus', hidden: false },
      children: [
        {
          path: 'index',
          name: 'add-article',
          component: () => import('@/views/add-article/index.vue'),
          meta: { title: '添加文章1' }
        },
        {
          path: 'index2',
          name: 'add-article-2',
          component: () => import('@/views/add-article/index.vue'),
          meta: { title: '添加文章2' },
          children: [
            {
              path: 'index2-1',
              name: 'add-article-2-1',
              component: () => import('@/views/add-article/index.vue'),
              meta: { title: '添加文章2-1' },
              children: [
                {
                  path: 'index2-1-1',
                  name: 'add-article-2-1-1',
                  component: () => import('@/views/add-article/index.vue'),
                  meta: { title: '添加文章2-2' }
                },
                {
                  path: 'index2-1-2',
                  name: 'add-article-2-1-2',
                  component: () => import('@/views/add-article/index.vue'),
                  meta: { title: '添加文章2-2' }
                }
              ]
            },
            {
              path: 'index2-2',
              name: 'add-article-2-2',
              component: () => import('@/views/add-article/index.vue'),
              meta: { title: '添加文章2-2' }
            }
          ]
        },
        {
          path: 'index3',
          name: 'add-article-3',
          component: () => import('@/views/add-article/index.vue'),
          meta: { title: '添加文章3' }
        }
      ]
    },
    {
      path: '/edit',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'edit',
          component: () => import('@/views/edit/index.vue'),
          meta: { title: '编辑资料', icon: 'el-icon-setting' }
        }
      ]
    },
    {
      path: '/test-mock',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'test',
          component: () => import('@/test/test-mock.vue'),
          meta: { title: '测试', icon: 'el-icon-s-opportunity' }
        }
      ]
    },

    {
      path: '/login',
      name: '登陆',
      component: () => import('@/views/login/index')
    },
    {
      path: '/getout',
      name: '退出',
      component: () => import('@/views/login/index')
    },

    // * 代表 除了上面定义的路由路径之外，点击其他不存在的路由地址都为404的界面
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404')
    }
  ]
})

export default router
