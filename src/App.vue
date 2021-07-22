<template>
  <div id="app">
    <div class="div">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss"></style>
