<template>
  <div class="landingpage">
    <div class="padding">
      <div class="landing_logo">
        <img src="/img/logo-securities.6b29399d.png" alt="" />
      </div>
    </div>
    <div class="landing d-flex">
      <div class="column first" @click="immitateClick">
        <router-link to="/home">Наша структура</router-link>
        <h2>Наша структура</h2>
      </div>
      <div class="column second" @click="immitateClick">
        <router-link to="/team">Наша команда</router-link>
        <h2>Наша команда</h2>
      </div>
      <div class="column third" @click="immitateClick">
        <router-link to="/contact">Обратитесь к нам</router-link>
        <h2>Обратитесь к нам</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Landing",
  data: () => ({
    reg: /\/\w+/g,
  }),
  methods: {
    immitateClick(e) {
      let path = e.target.children[0].href.match(this.reg)[1];
      this.$router.push({ path: path });
      // e.target.children[0].click();
    },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/landing.scss";
@import "../assets/styles/first-animation.scss";
// @import "../assets/styles/second-animation.scss";
// @import "../assets/styles/third-animation.scss";
</style>
