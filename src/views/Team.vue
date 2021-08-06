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

  components: {
    TeamSelect,
    Footer,
  },
};
</script>
<style lang="scss">
.our_team {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
