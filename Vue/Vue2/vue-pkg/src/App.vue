<template>
  <div id="app">
    <Form :model="formValidate" :rules="ruleValidate">
      <FormItem label="用户名" prop="name">
        <Input v-model="formValidate.name"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail"></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import Form from "./components/Form/index.vue";
import FormItem from "./components/Form/FormItem.vue";
import Input from "./components/Input";

export default {
  components: { Form, FormItem, Input },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
};
</script>