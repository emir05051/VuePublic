<template>
  <div class="structure">
    <div class="padding"></div>
    <StructureHeader />
    <div
      class="
        d-flex
        align-items-center
        justify-content-center
        mt-3
        mb-3
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
    <div class="col pie-active">
      <Pie />
    </div>
    <div class="col hidden shares-hidden">
      <Shares />
    </div>
    <div class="col hidden documents-hidden">
      <div class="documents">
        <DocumentTemplate
          document_title="Инвестиционная декларация"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://cesec.kz/sites/default/files/files_pdf/id_pa_na_russ.pdf"
        />
        <DocumentTemplate
          document_title="Апрель"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://portfoliows.enpf.kz/portfoliopdf/downloadPdf/guid=639f7e83-1b0c-4e9a-88ce-59159cc88b2a"
        />
        <DocumentTemplate
          document_title="Май"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://portfoliows.enpf.kz/portfoliopdf/downloadPdf/guid=3376db7e-dc8d-4d31-a62d-4505878b6567"
        />
        <DocumentTemplate
          document_title="Июнь"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://portfoliows.enpf.kz/portfoliopdf/downloadPdf/guid=4cf33f81-7ee5-40ff-8086-83ef6ca157b1"
        />
        <DocumentTemplate
          document_title="Июль"
          imageSource="pension"
          imageExtension="jpeg"
          href="https://portfoliows.enpf.kz/portfoliopdf/downloadPdf/guid=ccf09569-761d-49b7-a975-ae7a0caf247d"
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
    border-radius: 20px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    cursor: pointer;
    transition: box-shadow 0.3s linear, background 0.3s linear;
    white-space: nowrap;
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
.structure_button {
  flex-direction: row;
}

.structure {
  display: flex;
  flex-direction: column;
}
.documents {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  justify-content: flex-start;
  div {
    margin-right: 10px;
  }
}
.hidden {
  display: none !important;
}
.button_focused {
  background: #cb60b3 !important;

  color: #fff;
}

.div_button:hover {
  color: #fff;
  background: #cb60b3 !important;
  box-shadow: -3px -3px 7px -0px #a65899 inset;
}
@media (max-width: 820px) {
  .structure_button {
    flex-direction: column;
    align-items: stretch !important;
    div {
      margin-bottom: 10px;
      margin-left: 0;
    }
  }
}

@media (max-width: 590px) {
  .documents {
    flex-direction: column !important;
  }
}
@media (max-width: 500px) {
  .subtext {
    word-wrap: break-word;
  }
  .font-size-big {
    word-wrap: break-word;
  }
}
</style>
