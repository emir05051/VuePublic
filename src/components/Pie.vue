<template>
  <div class="pie-chart" ref="piechart">
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
    createTable() {
      this.table.classList.add("pie-list");
      let sum = this.getSumOfPieNumbers(this.chartData);

      this.chartData.map((el, idx) => {
        if (idx !== 0) {
          let tr = document.createElement("tr");

          let tdColor = document.createElement("td");
          let tdMain = document.createElement("td");
          let tdPercent = document.createElement("td");

          let percentage = ((el[1] / sum) * 100).toFixed(1);

          tdPercent.innerHTML = `<span style="color:green; font-weight:bold">${percentage}%</span>`;
          tdColor.innerHTML = `<div class="" style="width: 10px; height: 10px; background-color: ${
            this.arrayOfColors[idx - 1]
          };"></div>`;

          tdMain.innerHTML = `${el[0]}`;
          tr.append(tdColor, tdMain, tdPercent);
          this.table.append(tr);

          document.querySelector(".pie-chart").after(this.table);
        }
      });
    },
  },
  mounted() {
    if (window.innerWidth < 800) {
      this.chartOptions.chartArea.width = "70%";
      this.chartOptions.chartArea.height = "100%";
    }
    if (window.innerWidth > 1800) {
      this.chartOptions.width = window.innerWidth / 2.2;
    }
    this.createTable();
  },
  data() {
    return {
      arrayOfColors: [
        "#3366cc",
        "#dc3912",
        "#ff9900",
        "#109618",
        "#990099",
        "#0099c6",
        "#dd4477",
        "#66aa00",
        "#b82e2e",
        "#316395",
      ],
      table: document.createElement("table"),
      windowIsSmall: false,
      chartData: [
        ["Name", "Amount"],
        ["ГЦБ МФ РК", 436800793.58],
        ["Акции и депозитарные расписки эмитентов РК", 25410502.71],
        ["Денежные средства на инвестиционных счетах", 3834],
        ["РЕПО", 0],
      ],
      chartOptions: {
        title: "Структура активов фонда по видам финансовых инструментов:",
        width: window.innerWidth / 1.5,
        height: window.innerWidth / 3.67,

        titleTextStyle: {
          bold: true,
          fontSize: 15,
        },
        pieSliceTextStyle: {
          color: "transparent",
        },
        chartArea: { width: "50%", height: "60%" },
        legend: { position: "none" },
      },
    };
  },
};
</script>

<style>
path {
  cursor: pointer;
}
.pie-list p {
  margin: 0;
}
.pie-list {
  margin-bottom: 30px;
  text-align: start;
}
</style>
