<template>
  <div class="login">
    <!-- ref="ValidateForm"  登陆登陆按钮传递这个参数-->
    <!-- :model="ValidateForm"  绑定一个对象，里面的标签通过这个对象来进行绑定对应的值 -->
    <el-form
      :model="ValidateForm"
      :class="['demo-ruleForm', {'animated shake': shake_flag}]"
      ref="ValidateForm"
    >
      <h2>登陆界面</h2>

      <!--
        prop="user" :rules="[
        {required: true, message: '不能为空'}
      ]"
        :rules 验证规则， prop = user（必填 配合:rules） 
      el-form-item元素的prop属性绑定字段名name，表单验证时，
      就会验证el-input元素绑定的变量ruleForm.name的值是否符合验证规则-->
      <el-form-item>
        <!-- v-model 绑定ValidateForm对象里的user， 如果不绑定，输入框无法输入东西 -->
        <!-- prefix-icon="el-icon-user-solid"  在input前面加上一个图标-->
        <el-input
          type="text"
          autocomplete="off"
          v-model="ValidateForm.user"
          prefix-icon="el-icon-user-solid"
          placeholder="QQ号码/手机/邮箱"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <!-- show-password   密码图标，点击后密码会显示，再次点击密码会变成 **** -->
        <!-- 键盘事件需要加上.native才能出发键盘事件，这是因为element-ui在外面包裹了一层div -->
        <el-input
          type="password"
          v-model="ValidateForm.password"
          prefix-icon="el-icon-lock"
          show-password
          placeholder="密码"
          @keyup.enter.native="submitForm()"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ValidateForm')"
          style="width:100%;"
          :loading="loading_flag"
        >{{ btn_value }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setCookie } from '@/utils/cookie.js'
import request from '@/utils/request.js'
var qs = require('qs')
export default {
  data() {
    return {
      loading_flag: false,
      shake_flag: false,
      btn_value: '登陆',
      ValidateForm: {
        user: '123456',
        password: ''
      }
    }
  },
  methods: {
    // 点击登陆时 携带cookie
    submitForm() {
      let user = this.ValidateForm.user.trim()
      if (user.length >= 1) {
        this.loading_flag = true
        this.btn_value = '正在登陆...'
        request

          .post(
            '/login',
            qs.stringify(
              { password: this.ValidateForm.password },
              { user: this.ValidateForm.user }
            )
          )
          .then(res => {
            switch (res.data.code) {
              case 200:
                setCookie('VIP')
                this.$router.push('/home')
                break
              case 400:
                this.shake_flag = true
                this.loading_flag = false
                this.btn_value = '登陆'
                this.$message.error('账号或密码错误')
                // 密码错误时清空密码
                this.ValidateForm.password = ''
                // 1 秒后在把都抖动去除， 如果直接去除 抖动会冲突 导致没有效果
                setTimeout(() => {
                  this.shake_flag = false
                }, 1000)
                break
            }
          })
          .catch(error => {
            this.loading_flag = false
            this.btn_value = '登陆'
            console.log(error)
          })
      } else {
        this.$message.error('账号不能为空')
      }
    }
  }
}
</script>

<style lang='scss' >
$dark_gray: #889aa4;
.login {
  height: 100%;
  background-color: #2d3a4b;
  // background-color: #2d3a4b;
  // 给表单添加定位居中， 否则 默认标签会铺满
  .demo-ruleForm {
    position: relative;
    width: 400px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    color: #fff;
    .el-input__inner {
      color: #fff;
      background: #4a5867;
    }
  }
}
</style>

