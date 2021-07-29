<template>
  <div class="structure">
    <div class="padding"></div>
    <StructureHeader />
    <div
      class="
        d-flex
        flex-column flex-md-row
        align-items-center
        justify-content-center
        mt-5
        mb-1
        flex-grow
        structure_button
      "
    >
      <div @click="divClick" class="pie_button div_button button_focused">
        РАСПРЕДЕЛЕНИЕ АКТИВОВ
      </div>
      <div @click="divClick" class="shares_button div_button">
        СОСТАВ ПОРТФЕЛЯ
      </div>
      <div @click="divClick" class="documents_button div_button">ДОКУМЕНТЫ</div>
    </div>
    <div class="col col-12 pie-active">
      <Pie />
    </div>
    <div class="col col-12 hidden shares-hidden">
      <Shares />
    </div>
    <div class="col col-12 hidden documents-hidden">
      <div class="documents">
        <DocumentTemplate
          document_title="Тизер"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://cesec.kz/"
        />
        <DocumentTemplate
          document_title="Инвест декларация"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://cesec.kz/"
        />
        <DocumentTemplate
          document_title="Инвсетиционная деятельность"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://cesec.kz/"
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
.structure_body {
  text-align: start;
}
.font-size-big {
  font-size: calc(1.1rem + 0.9vw);
  margin: 15px 0;
}
.subtext {
  font-size: 15px;
}
.structure_button {
  div {
    margin-left: 30px;
    padding: 15px 30px;
    font-weight: bold;
    border-radius: 30px;
    background: linear-gradient(3.8deg, #cdd5da -3.66%, #ffffff 105.74%);
    cursor: pointer;
  }
}
.structure {
  & .col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
td {
  padding-left: 15px;
}
.documents {
  display: flex;
  justify-content: space-evenly;
}
.hidden {
  display: none !important;
}
.button_focused {
  background: linear-gradient(84.1deg, #21212b 0%, #20202a 92.96%) !important;
  color: #fff;
}
.div_button:hover {
  background: #757582 !important;
  color: #fff;
}
@media (max-width: 768px) {
  .structure_button {
    align-items: stretch !important;
    div {
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 590px) {
  .documents {
    flex-direction: column !important;
  }
}
</style>
