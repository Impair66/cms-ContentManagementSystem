<template>
  <div class="login-phone">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" type="text" autocomplete="off" />
        <el-button type="primary" style="margin-left: 8px"
          >发送验证码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the code"));
  } else {
    if (ruleForm.code !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("code", () => null);
    }
    callback();
  }
};
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the phone again"));
  } else if (value !== ruleForm.phone) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  phone: "",
  code: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  phone: [{ validator: validatePass, trigger: "blur" }],
  code: [{ validator: validatePass2, trigger: "blur" }],
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
.login-phone {
  display: flex;
  align-items: center;
  justify-content: center;
}
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
</style>
