<template>
  <div class="content_image" @click="enlarge">
    <img
      src="../../public/img/table.png"
      width="80%"
      height="30%"
      class="minimized"
    />
  </div>
</template>

<script>
export default {
  name: "Table",

  methods: {
    enlarge() {
      let img = document.querySelector(".content_image").children[0];
      let src = img.src;

      let overflow = document.createElement("div");
      overflow.classList = "overflow";
      document.getElementById("app").append(overflow);

      let imgOverflow = document.createElement("img");
      imgOverflow.src = src;
      overflow.append(imgOverflow);

      let closeButton = document.createElement("div");
      closeButton.classList = "close_button";
      overflow.append(closeButton);

      let header = document.querySelector(".header");
      header.style.display = "none";

      document.body.classList.toggle("lock");

      closeButton.addEventListener("click", () => {
        overflow.remove();
        header.style.display = "block";
        document.body.classList.toggle("lock");
      });
    },
  },
};
</script>
