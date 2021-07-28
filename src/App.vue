<template>
  <div id="app">
    <div class="div">
      <Header />
      <keep-alive exclude="PersonDetails">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  data: () => ({
    location: "",
  }),
  components: {
    Header,
  },
};
</script>

<style lang="scss"></style>
