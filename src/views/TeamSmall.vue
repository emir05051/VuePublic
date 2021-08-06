<template>
  <div class="our_team_small">
    <div class="padding"></div>

    <TeamSelectSmall />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import TeamSelectSmall from "@/components/TeamSelectSmall.vue";

export default {
  name: "TeamSmall",

  components: {
    TeamSelectSmall,
    Footer,
  },
};
</script>
