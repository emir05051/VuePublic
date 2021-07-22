<template>
  <div>
    <div class="padding"></div>
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HomePage,
    Footer,
  },
};
</script>
