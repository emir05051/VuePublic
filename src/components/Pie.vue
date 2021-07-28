<template>
  <div class="pie-chart mb-5" ref="piechart">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "PieChart",

  components: {
    GChart,
  },
  methods: {
    getSumOfPieNumbers(array) {
      let sum = 0;

      array.map((el, idx) => {
        idx !== 0 ? (sum += el[1]) : "";
      });

      return sum;
    },
  },
  mounted() {
    if (window.innerWidth <= 680) {
      this.chartOptions.legend.position = "none";
      this.div.classList.add("pie-list");
      let sum = this.getSumOfPieNumbers(this.chartData);

      this.chartData.map((el, idx) => {
        if (idx !== 0) {
          let p = document.createElement("p");
          let percentage = (el[1] / sum) * 100;

          p.innerHTML = `${
            el[0]
          }: <span style="color:green; font-weight:bold">${percentage.toFixed(
            1
          )}%<span>`;

          this.div.append(p);
        }
      });

      console.log(this.$refs.piechart.after(this.div));
    } else {
      this.chartOptions.legend.position = "right";
    }
  },
  data() {
    return {
      div: document.createElement("div"),
      windowIsSmall: false,
      chartData: [
        ["Name", "Amount"],
        ["Наличные деньги", 1],
        ["Государственные ценные бумаги", 1],
        ["Корпоративные облигации в KZT и USD", 1],
        ["Корпоративные акции в KZT в USD", 1],
        ["Депозитарные расписки", 5],
        ["Вклады в банках", 1],
        ["Финансовые инструменты Инвестиционных фондов", 1],
        ["Индексные фонды облигаций и (ETFs)", 1],
        ["Инструменты денежного рынка (РЕПО и другое)", 1],
        ["Производные финансовые инструменты", 1],
      ],
      chartOptions: {
        title: "Структура активов фонда по видам финансовых инструментов:",
        width: window.innerWidth / 1.1,
        height: window.innerWidth / 2.5,
        titleTextStyle: {
          bold: false,
          fontSize: 15,
        },
        tooltip: {
          textStyle: { color: "#000" },
          showColorCode: true,
          ignoreBounds: true,
        },
        chartArea: { width: "50%", height: "70%" },
        legend: { position: "bottom" },
      },
    };
  },
};
</script>

<style>
.pie-chart {
  margin-left: auto !important;
  /* margin-right: auto; */
}
.pie-list p {
  margin: 0;
}
.pie-list {
  margin-bottom: 30px;
}
</style>
