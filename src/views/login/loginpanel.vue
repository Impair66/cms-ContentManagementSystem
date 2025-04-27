<template>
  <div
    class="login-container"
    style="background-image: url('src/assets/images/login/background.jpg')"
  >
    <div class="login-panel">
      <el-tabs type="border-card" class="demo-tabs" stretch>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <login-account />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <login-phone />
        </el-tab-pane>
        <div class="login-password">
          <el-checkbox v-model="checked1" label="记住密码" />
          <el-link type="primary">忘记密码</el-link>
        </div>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import loginAccount from "./loginAccount.vue";
import LoginPhone from "./loginPhone.vue";
const checked1 = ref("");
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  .login-panel {
    position: absolute;
    top: 50%;
    left: 45%;
    width: 320px;
    height: 400px;
    // border-radius: 8px;
  }
  .login-password {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
  }
}
</style>
