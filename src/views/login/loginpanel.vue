<template>
  <div>
    <img src="../../assets//login//background.jpg" alt="" class="bgc-img" />
    <div class="login-panel">
      <el-tabs type="border-card" class="demo-tabs" stretch>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <login-account/>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <login-phone/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import loginAccount from './loginAccount.vue';
import LoginPhone from './loginPhone.vue';
export default {
  components: { loginAccount, LoginPhone },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.bgc-img {
  width: 100%;
  height: 100%;
}
.login-panel{
    position: absolute;
    top: 50%;
    left: 45%;
    width: 320px;
    height: 400px;
    // border-radius: 8px;
}
</style>
