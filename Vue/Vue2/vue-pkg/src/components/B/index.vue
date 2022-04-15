<!--
 * @Author: 王首人
 * @Date: 2022-04-15 10:00:05
 * @LastEditors: 王首人
 * @LastEditTime: 2022-04-15 11:01:02
 * @FilePath: \Vue2\vue-pkg\src\components\B\index.vue
 * @Description: 子组件通过$emit发送信息到父组件，父组件用$on捕获
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <Child @test="handleEvent" />
</template>
<script>
import Child from "./Child.vue";
export default {
  methods: {
    handleEvent(text) {
      console.log("father", text); // Hello Vue.js
    },
  },
  components: {
    Child,
  },
};
</script>

