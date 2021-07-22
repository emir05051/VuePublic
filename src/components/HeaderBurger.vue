<template>
  <div class="header_burger" @click="dropDown">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "HeaderBurger",

  methods: {
    dropDown() {
      this.$emit("toggleMenu");
    },
  },
};
</script>
