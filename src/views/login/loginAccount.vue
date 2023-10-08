<template>
  <div class="login-account">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item label="账号" prop="account" required>
        <el-input
          v-model="ruleForm.account"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

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
