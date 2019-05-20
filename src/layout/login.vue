<template>
  <div class="login">
    <div class="auth-form px-3" id="login">
      <!-- '"` -->
      <!-- </textarea></xmp> -->
      <form action="/session" accept-charset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓">
        <input
          type="hidden"
          name="authenticity_token"
          value="3G/qH81rsdMPpEz39TvMj6SG5F6zU70/Y+KWla5e9uHJ8Nw1z2EF0k2/PBJQGogJujasweFB8Um2fhcWzcRb3A=="
        >
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
            >
          </router-link>
        </div>
      </form>

      <p class="create-account-callout mt-3" style="color:#fff;">
        没有账号吗？
        <a
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;1527556013.1557840905&quot;,&quot;originating_request_id&quot;:&quot;FCCB:5EF8:1F7CC11:2B2849E:5CE1F010&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;referrer&quot;:&quot;https://github.com/&quot;,&quot;user_id&quot;:null}}"
          data-hydro-click-hmac="161f501d391edc604a05a8f53681b9b3ed5db7264a5096dbfe8505c7763d19da"
          data-ga-click="Sign in, switch to sign up"
          href="/join?source=login"
        >注册</a>
      </p>
    </div>
  </div>
</template>
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

