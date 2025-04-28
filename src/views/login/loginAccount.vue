<template>
  <div class="login-account">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item label="账号" prop="account" required>
        <el-input v-model="ruleForm.account" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%"
          color="var(--baseFontColor)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
// import { setToken } from "@/utils/auth";
// import { useUserStore } from "@/store/modules/user";
import { useRouteStore } from "@/store/modules/route";
// const userStore = useUserStore();

const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the account"));
  } else {
    if (ruleForm.password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("password", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.account) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
// const handleLoginRes = (data: any) => {
//   // 登录成功
//   setToken(data.tokenValue);
//   localStorage.setItem("tokenName", data.tokenName);
//   userStore.setInfo({
//     token: data.tokenValue,
//     userId: data.userId,
//     tokenName: data.tokenName,
//   });
//   // 跳转到上一页
//   useRouteStore().back();
//   ElMessage.success("登录成功");
// };

// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       loginByEmail(ruleForm.value).then((res) => {
//         const { code, success, data } = res.data;
//         if (success) {
//           handleLoginRes(data);
//         } else {
//           validCodeImg();
//         }
//       });
//     }
//   });
// };

const ruleForm = reactive({
  account: "",
  password: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  account: [{ validator: validatePass, trigger: "blur" }],
  password: [{ validator: validatePass2, trigger: "blur" }],
});

// const submitForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.validate((valid) => {
//     if (valid) {
//       console.log("submit!");
//     } else {
//       console.log("error submit!");
//       return false;
//     }
//   });
// };
</script>
<style lang="scss" scoped>
.login-account {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
