<template>
  <div>B{{ name }}</div>
</template>

<script>
export default {
  inject: ["name"],
  mounted() {
    console.log(this.name); // Aresn
  },
};
</script>

<style>
</style>
