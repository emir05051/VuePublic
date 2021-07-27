<template>
  <div class="home pb-5">
    <div class="homepage container p-5">
      <h1 class="text-body">Управление пенсионными активами</h1>
      <b-button pill variant="primary" @click="openNewTab" class="p-3 mt-3">
        Информация по продукту
      </b-button>
    </div>
    <div class="container" style="padding-right: 0px; padding-left: 0px">
      <Paragraph
        msg="Ведущий в Казахстане брокер и крупнейший управляющий активами розничных
        паевых инвестиционных фондов на протяжении 15 лет.  "
      />
    </div>
    <Table />
    <Paragraph msg="Преимущества УИП" />
    <h3>
      Доходность
      <a href="https://cesec.kz/paevyefondy" style="color: #2c3e50">ПИФов СС</a>
      и
      <a href="https://cesec.kz/paevyefondy" style="color: #2c3e50">ЕНПФ</a>
    </h3>
    <div class="container ml-0 mr-0 p-0">
      <div class="container">
        <div class="row w-100">
          <Column1 v-show="windowWidth" />
          <Column2 v-show="!windowWidth" />
        </div>
      </div>
    </div>
    <Paragraph msg="Контроль деятельности УИП" />
    <div class="container">
      <Collapse />
    </div>
    <Paragraph msg="Защита интересов вкладчиков в УИП" />
    <div class="container">
      <p>
        Обеспечение минимального уровня доходности. Отклонение на более чем 30%,
        финансируется за счет собственных средств ук Прозрачность деятельности
        УК.Инвест. Декларация и ежемесячная отчетность по портфелю будет
        размещаться на сайте УК и ЕНПФ Смена УК 1 раз в год, возрат в ЕНПФ через
        2 года Контроль деятельности УПА со стороны АРРФР РК, ЕНПФ,
        Банк-Кастодиан
      </p>
    </div>
    <Paragraph msg="Ключевые показатели СС" />
    <div class="container m-0 p-0 overflow-hidden">
      <Pie />
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
import Collapse from "@/components/Collapse.vue";
import Pie from "@/components/Pie.vue";
import Slider from "@/components/Slider.vue";

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
      window.open("http://172.31.80.1:8082/pres.pdf");
    },
  },
  components: {
    Table,
    Column1,
    Column2,
    Paragraph,
    Collapse,
    Pie,
    Slider,
  },
};
</script>
