<template>
  <div class="structure">
    <div class="padding"></div>
    <StructureHeader />
    <div
      class="
        d-flex
        align-items-center
        justify-content-center
        mt-5
        mb-3
        flex-grow
        structure_button
      "
    >
      <button @click="divClick" class="pie_button div_button button_focused">
        Распределение активов
      </button>
      <button @click="divClick" class="shares_button div_button">
        Состав портфеля
      </button>
      <button @click="divClick" class="documents_button div_button">
        Наши документы
      </button>
    </div>
    <div class="row pie-active">
      <Pie />
    </div>
    <div class="col hidden shares-hidden">
      <Shares />
    </div>
    <div class="col hidden documents-hidden">
      <div class="documents mt-1">
        <DocumentTemplate
          document_title="Инвестиционная декларация"
          imageSource="pension"
          imageExtension="jpg"
          href=""
        />
        <DocumentTemplate
          document_title="Апрель"
          imageSource="pension"
          imageExtension="jpg"
          href=""
        />
        <DocumentTemplate
          document_title="Май"
          imageSource="pension"
          imageExtension="jpg"
          href=""
        />
        <DocumentTemplate
          document_title="Июнь"
          imageSource="pension"
          imageExtension="jpg"
          href=""
        />
        <DocumentTemplate
          document_title="Июль"
          imageSource="pension"
          imageExtension="jpg"
          href=""
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Pie from "@/components/Pie.vue";
import StructureHeader from "@/components/StructureHeader.vue";
import Shares from "@/components/Shares.vue";
import DocumentTemplate from "@/components/DocumentTemplate.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Structure",

  components: {
    Pie,
    Shares,
    StructureHeader,
    DocumentTemplate,
    Footer,
  },

  methods: {
    divClick(e) {
      let classList = e.target.classList;
      let pie = document.querySelector(".pie-active");
      let shares = document.querySelector(".shares-hidden");
      let documents = document.querySelector(".documents-hidden");

      this.buttonFocused(e);

      if (classList.contains("documents_button")) {
        this.addClass(documents, shares, pie);
      }
      if (classList.contains("pie_button")) {
        this.addClass(pie, documents, shares);
      }
      if (classList.contains("shares_button")) {
        this.addClass(shares, pie, documents);
      }
    },

    buttonFocused(e) {
      this.removeFocus(e);
      e.target.classList.add("button_focused");
    },

    removeFocus(e) {
      let array = Array.from(e.target.parentNode.children);
      array.forEach((el) => {
        el.classList.remove("button_focused");
      });
    },

    addClass(addClassDiv, removeClassDiv_1, removeClassDiv_2) {
      addClassDiv.classList.remove("hidden");
      removeClassDiv_1.classList.remove("hidden");
      removeClassDiv_2.classList.remove("hidden");

      removeClassDiv_1.classList.add("hidden");
      removeClassDiv_2.classList.add("hidden");
    },

    addNull(date) {
      if (date < 10) {
        return `0${date}`;
      }
      return date;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/structure.scss";
</style>
