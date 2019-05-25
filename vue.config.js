var path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
  // 动态获取文件路径，我们需要使用这个路径来改变引入路径的方式
}
module.exports = {
  // 部署生产环境和开发环境下的URL。 访问静态资源的根路径， 例如/wwww ，那么所有资源都只会来到这个/wwww访问。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
  // 你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
  // 生产环境我们只需要./ 相对就可以拿到资源， 开发环境使用 /绝对路径 就可以拿到资源 如图片,js,css
  // 例如生产环境的路径 ./ 它就会自动找到所对应引用资源的文件，如果./haha 表示指定只到打包后的haha文件里面加载资源。所以要注意确定是否以这个为根目录
  // 开发环境 的 / 可以是/ x x/xx任意改也不会影响加载静态资源。这是目前测试出来的。
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
  outputDir: 'dist',

  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  // indexPath: "myIndex.html",

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  // 你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,

  // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint,
  // 设置为时true，eslint-loader将发出lint错误作为警告。默认情况下，警告仅记录到终端，并且不会使编译失败。
  lintOnSave: true,
  // 如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，
  // 但是这会让你的应用额外增加 10kb 左右。(默认false)
  runtimeCompiler: false,

  // 默认情况下babel-loader忽略其中的所有文件node_modules。如果要使用Babel显式转换依赖关系，可以在此选项中列出它
  transpileDependencies: [],

  // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,
  // map就是为了方便打印错误位置。
  productionSourceMap: false,

  // 在生成的HTML中配置crossorigin属性<link rel="stylesheet">和<script>标记。
  // 告诉脚本而不发送用户凭据
  crossorigin: undefined,
  /*
   *设置为在生成的HTML中true启用子资源完整性（SRI）<link rel="stylesheet">和<script>标记。如果您在CDN上托管构建的文件，最好启用此功能以获得额外的安全性。
   *，启用SRI时，由于Chrome中的错误导致资源被下载两次，因此会禁用预加载资源提示
   * */
  integrity: false,

  // css相关配置
  css: {
    // 默认情况下，只有以文件结尾的文件*.module.[ext]才会被视为CSS模块。
    // 将此设置为true允许您.module放入文件名并将所有*.(css|scss|sass|less|styl(us)?)文件视为CSS模块。
    modules: false,
    // 是否将组件中的CSS提取到独立的CSS文件中（而不是在JavaScript中内联并动态注入）。
    // 默认情况下，在开发模式下禁用提取CSS，因为它与CSS热重新加载不兼容， 但是你仍然可以为treu来强制提取
    // 为ture就不会热更新了。需要flase, 生产在为true。
    extract: false,
    // 是否为CSS启用源映射。将此设置为true可能会影响构建性能。
    sourceMap: false,
    // 将选项传递给与CSS相关的加载器
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },
  // webpack的一些配置
  configureWebpack: {
    resolve: {
      alias: {
        // 表示当我们要引入src文件时，
        // 例如src里有一个views文件夹里面有一个ab.vue文件，、
        // 我们只需要@/views/ab.vue 或者 @/views/ab即可
        '@': resolve('src')
      }
    }
  },

  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: 'localhost',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器

    // 配置跨域处理
    // 只有一个代理
    // proxy: 'http://localhost:3001'
    // 配置多个代理
    proxy: {
      '/api': {
        // 目标服务器接口
        target: 'https://www.easy-mock.com/mock/5cdffe756a71205ae880970a',
        ws: true, //代理的WebSockets
        changeOrigin: true, // 需要虚拟主机站点 ，为True表示需要跨域
        pathRewrite: {
          // 代理人api 我们通过这个api/x就可以拿到服务器目标接口。
          // 要加上这个，我们发送请求时 只需要/api/a 即可访问到 服务器的http://127.0.0.1:3001/a资源了
          '^/api': '/'
        }
      },
      // 注意代理名称不能带有数字  如 不能foo1  无效。
      '/foo': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/foo': '/'
        }
      }
    }
  }
}
