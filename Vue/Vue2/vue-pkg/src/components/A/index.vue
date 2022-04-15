<!--
 * @Author: 王首人
 * @Date: 2022-04-15 09:19:54
 * @LastEditors: 王首人
 * @LastEditTime: 2022-04-15 11:01:24
 * @FilePath: \Vue2\vue-pkg\src\components\A\index.vue
 * @Description: 通过provide向下层传递数据
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->

<template>
  <div>
    A
    <B />
  </div>
</template>

<script>
import B from "./B.vue";
export default {
  name: "A",
  provide: {
    name: "Aresn",
  },
  components: { B },
  mounted() {
    console.log("A mounted");
    console.log(this);
    // this._provided.name = "Michel";
  },
};
</script>

<style>
</style>
