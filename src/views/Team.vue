<template>
  <div class="our_team">
    <div class="padding"></div>
    <Slider />
    <Footer />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Team",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    Slider,
    Footer,
  },
};
</script>
