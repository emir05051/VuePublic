<template>
  <div class="home pb-5">
    <div class="homepage container p-5">
      <h1 class="text-body" style="font-size: 2rem">
        Управление пенсионными активами
      </h1>
      <button @click="openNewTab" class="p-3 mt-3 btn-primary rounded-pill">
        Информация по продукту
      </button>
    </div>
    <div class="container" style="padding-right: 0px; padding-left: 0px">
      <Paragraph
        msg="Ведущий в Казахстане брокер и крупнейший управляющий активами розничных
        паевых инвестиционных фондов на протяжении 15 лет.  "
      />
    </div>
    <Table />
    <div class="container">
      <Paragraph msg="Наше преимущество" />
    </div>
    <h5>
      Доходность
      <a href="https://cesec.kz/paevyefondy" style="color: #2c3e50">ПИФов СС</a>
      и
      <a href="https://cesec.kz/paevyefondy" style="color: #2c3e50">ЕНПФ</a>
    </h5>
    <div class="container ml-0 mr-0 p-0">
      <Column1 v-show="windowWidth" />
      <Column2 v-show="!windowWidth" />
    </div>
    <div class="container">
      <Paragraph msg="Контроль деятельности УИП" />
    </div>
    <div class="container">
      <Control />
    </div>
    <div class="container">
      <Paragraph msg="Защита интересов вкладчиков в УИП" />
    </div>
    <div class="container">
      <ul class="benefit_list">
        <li>Обеспечение минимального уровня доходности.</li>
        <li>Прозрачность деятельности УК.</li>
        <li>Смена УК 1 раз в год, возрат в ЕНПФ через 2 года</li>
        <li>
          Контроль деятельности УПА со стороны АРРФР РК, ЕНПФ, Банк-Кастодиан
        </li>
      </ul>
    </div>
    <div class="container">
      <Paragraph msg="Ключевые показатели СС" />
    </div>
    <div class="container">
      <Slider />
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Column1 from "@/components/Column1.vue";
import Column2 from "@/components/Column2.vue";
import Paragraph from "@/components/Paragraph.vue";
import Control from "@/components/Control.vue";

export default {
  name: "HomePage",
  mounted() {
    if (window.innerWidth <= 1100) {
      this.windowWidth = true;
    } else {
      this.windowWidth = false;
    }
  },
  data: () => ({
    windowWidth: false,
  }),
  methods: {
    openNewTab() {
      window.open(
        "https://cesec.kz/sites/default/files/files_pdf/pensionnoe_upravlenie_ss_2021.pdf"
      );
    },
  },
  components: {
    Table,
    Column1,
    Column2,
    Paragraph,
    Control,
    Slider: () => import("@/components/Slider.vue"),
  },
};
</script>
<style lang="scss">
@import "../assets/styles/homepage.scss";
@import "../assets/styles/homepage_image.scss";
</style>
