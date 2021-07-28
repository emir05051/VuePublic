<template>
  <div class="main">
    <div class="padding"></div>
    <img :src="imgSrc" style="width: 100%; float: left" />
    <h2>{{ personName }}</h2>
    <br />
    {{ personDescription }}
  </div>
</template>

<script>
export default {
  name: "PersonDetails",
  data: () => ({
    personId: "",
    personName: "",
    personDescription: "",
  }),
  computed: {
    personGetId() {
      return this.$route.params.id;
    },
    personGetDescription() {
      return this.$route.params.description;
    },
    personGetName() {
      return this.$route.params.personName;
    },
    imgSrc() {
      return "/img/" + this.personGetId + ".jpg";
    },
  },
  created() {
    this.personId = this.personGetId;
    this.personName = this.personGetName;
    this.personDescription = this.personGetDescription;
  },
};
</script>
