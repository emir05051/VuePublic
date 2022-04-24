<template>
  <div class="document" @click="immitateClick">
    <p class="font-size-big_shares">
      <b style="color: black">{{ document_title }}</b>
    </p>
    <img :src="`/img/${imageSource}.${imageExtension}`" />
    <a :href="href" style="color: blue">Скачать</a>
  </div>
</template>

<script>
export default {
  props: {
    document_title: String,
    imageSource: String,
    imageExtension: String,
    href: String,
  },
  methods: {
    immitateClick(e) {
      e.target.parentNode.children[2].click();
    },
  },
};
</script>
<style lang="scss">
.document {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  cursor: pointer;
  a {
    color: #16132c;
  }
  img {
    width: 15vw;
    min-width: 215px;
  }
}
.font-size-big_shares {
  font-size: calc(0.3vw + 0.8rem);
}
</style>
