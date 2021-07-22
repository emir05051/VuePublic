<template>
  <div class="">
    <div class="padding"></div>
    <Slider />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
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
  },
};
</script>
