/* eslint-disable prettier/prettier */
<template>
  <div class="main">
    <div class="padding"></div>
    <div class="container landing">
      <h1 class="text-info align-self-center landing_header" @click="animateUL">
        Присоединяйся к Centras
      </h1>
      <ul class="d-flex flex-column ul">
        <router-link to="/home">Наша структура</router-link>
        <router-link to="/team">Наша команда</router-link>
        <router-link to="/contact">Обратитесь к нам</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Landing",
  methods: {
    async animateUL() {
      setTimeout(() => {}, 1000);

      let UL = document.querySelector(".ul");

      for (let i = 0; i < 3; i++) {
        await setTimeout(() => {
          UL.children[i].style.transform = "rotateY(" + 0 + "deg)";
        }, 300);
      }
    },
  },
};
</script>
