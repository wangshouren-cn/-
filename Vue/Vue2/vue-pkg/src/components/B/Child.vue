
<template>
  <button @click="handleEmitEvent">child</button>
</template>

<script>
export default {
  methods: {
    handleEmitEvent() {
      this.$emit("test", "Hello Vue.js");
    },
  },
  mounted() {
    this.$on("test", (str) => {
      console.log("child", str);
    });
  },
};
</script>

<style>
</style>