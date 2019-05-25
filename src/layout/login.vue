<template>
  <div class="login">
    <div class="auth-form px-3" id="login">
      <form action="/session" accept-charset="UTF-8" method="post">
        <div style="color:#fff">
          <h1>登陆界面</h1>
        </div>

        <div id="js-flash-container"></div>

        <div class="auth-form-body mt-3">
          <label for="login_field">输入你的账号或邮箱</label>
          <input
            type="text"
            name="login"
            id="login_field"
            class="form-control input-block"
            tabindex="1"
            autocapitalize="off"
            autocorrect="off"
            autofocus="autofocus"
          >
          <label for="password">
            密码
            <a class="label-link" href="/password_reset">忘记密码?</a>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control form-control input-block"
            tabindex="2"
          >
          <router-link tag="div" to="/home">
            <input
              type="submit"
              name="commit"
              value="登陆"
              tabindex="3"
              class="btn btn-primary btn-block"
              data-disable-with="Signing in…"
              @click="login"
            >
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { setCookie } from '@/utils/cookie.js'
export default {
  methods: {
    // 点击登陆时 携带cookie
    login: function() {
      setCookie('VIP')
    }
  }
}
</script>

<style lang='scss'>
.login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  form {
    position: relative;
    top: 200px;
  }
}
</style>

