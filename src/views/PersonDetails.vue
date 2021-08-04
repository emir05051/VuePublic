<template>
  <div class="main">
    <div class="padding" style="background-color: transparent"></div>
    <img :src="imgSrc" style="width: 100%; float: left" />
    <h2>
      <b>{{ personName }}</b>
    </h2>
    <h4>{{ personPosition }}</h4>
    <br />
    <h5 class="pb-3">{{ personDescription }}</h5>
  </div>
</template>

<script>
export default {
  name: "PersonDetails",
  data: () => ({
    personId: "",
    personName: "",
    personDescription: "",
    personPosition: "",
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
    personGetPosition() {
      return this.$route.params.position;
    },
    imgSrc() {
      return "/img/" + this.personGetId + ".jpg";
    },
  },
  created() {
    this.personId = this.personGetId;
    this.personName = this.personGetName;
    this.personDescription = this.personGetDescription;
    this.personPosition = this.personGetPosition;
  },
};
</script>
