<template>
  <div class="content_image" @click="enlarge" ref="container">
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
    createElement(name, expectedClass) {
      const element = document.createElement(name);
      element.classList = expectedClass;

      if (name == "img") {
        let img = document.querySelector(".content_image").children[0];
        let src = img.src;
        element.src = src;
      }

      return element;
    },
    enlarge() {
      let overflow = this.createElement("div", "overflow");
      document.getElementById("app").append(overflow);

      let imgOverflow = this.createElement("img", "image");
      overflow.append(imgOverflow);

      let closeButton = this.createElement("div", "close_button");
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
