<template>
  <div class="document" @click="immitateClick">
    <p>{{ document_title }}</p>
    <img
      :src="`/img/${imageSource}.${imageExtension}`"
      width="215"
      height="235"
    />
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
}
</style>
