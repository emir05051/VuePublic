<template>
  <div class="our_team">
    <div class="padding"></div>

    <TeamSelect />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import TeamSelect from "@/components/TeamSelect.vue";

export default {
  name: "Team",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    TeamSelect,
    Footer,
  },
};
</script>
