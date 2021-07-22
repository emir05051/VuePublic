<template>
  <p class="p-border p-4 mt-4">{{ msg }}</p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    msg: String,
  },
};
</script>
