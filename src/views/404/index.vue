<template>
  <div class="wrap-http404">
    <div class="sub">
      <div class="s-img-404">
        <img src="@/assets/404.png" alt>
      </div>
      <div class="s-title">
        <div class="s-title-wrap">
          <h1 style="color:blue;">OOPS!</h1>
          <p>
            all rights reserved
            <a href="#" style="color:blue;">walstreetcn</a>
          </p>
          <div>
            <h3>The webmaster said that you can not enter this page...</h3>
          </div>
          <p>
            Please check that the URL you entered is corect,
            clcik click the button below to retunro to the homepage
          </p>
          <div>
            <router-link class="btn-back" to="/home" tag="button">回到首页</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.wrap-http404 {
  display: flex; // 弹性布局，子元素也可以自己来一个弹性布局
  // flex-direction: column;
  // 控制所有元素的方向，默认从左往右
  // 当设置为所有元素从上到下（cloumn）的时候，flex-grow 放大的比例会失效、
  // 只有自己重新设置width / height; 否则它就会根据字体来自动收缩大小
  justify-content: center; // 可以说是控制所有元素左中右 对其方式
  align-items: center; // 控制所有元素上中下，其他元素根据最大元素，来配合上中下
  width: 100%;
  height: 100%;
  .sub {
    display: flex;
    justify-content: space-around;
    width: 1000px;
    margin-top: -200px;
    // flex-grow: 1; // 元素的权重，越高它的放大比例就越高，默认0，如果为2 其他为1 则比其他大2倍
    // flex: 1; // flex-grow flex-shink flex-basis的简写； 优先使用这个属性
    // align-self: flex-end; // 该元素可以单独设置它的对其方式，覆盖掉父容器的algin-items
    .s-img-404 {
      width: 70%;
      // justify-content: flex-start;
      img {
        width: 100%;
      }
    }
    .s-title {
      text-align: left;
      line-height: 40px;
      width: 50%;

      .s-title-wrap {
        width: 400px;
        .btn-back {
          width: 130px;
          border-radius: 25px;
          background: cornflowerblue;
          color: #fff;
        }
      }
    }
  }
}
</style>
