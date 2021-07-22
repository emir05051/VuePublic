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
    <div class="container">
      <Paragraph msg="Преимущества УИП" />
      <div class="container">
        <div class="row">
          <Column1 />
          <Column2 />
        </div>
      </div>
      <Paragraph msg="Контроль деятельности УИП" />
    </div>
    <div class="container">
      <Collapse />
    </div>
    <div class="container">
      <Paragraph msg="Защита интересов вкладчиков в УИП" />
    </div>
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
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Column1 from "@/components/Column1.vue";
import Column2 from "@/components/Column2.vue";
import Paragraph from "@/components/Paragraph.vue";
import Collapse from "@/components/Collapse.vue";

export default {
  name: "HomePage",
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
  },
};
</script>
