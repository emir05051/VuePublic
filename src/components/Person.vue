<template>
  <div class="person mb-2 mt-2" @click="getInformation" :class="imgSrc">
    <img :src="'img/' + imgSrc + '.jpg'" :alt="name" />
    <div class="description">
      <h4>{{ name }}</h4>
      <h6>{{ position }}</h6>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    imgSrc: String,
    name: String,
    position: String,
    description: String,
  },
  methods: {
    getInformation() {
      let person = document.querySelector("." + this.imgSrc);
      let image = person.children[0];
      let description = person.children[1].children[2];
      image.classList.toggle("active");
      description.classList.toggle("active");
    },
  },
};
</script>
<style>
.person {
  display: flex;
  width: 100%;
  cursor: pointer;
}

.person .description {
  width: 40%;
  margin-left: 30px;
}
.person p {
  display: none;
  font-size: 20px;
}
.person p.active {
  display: block;
}
</style>
