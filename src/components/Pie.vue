<template>
  <div>
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
  mounted() {
    if (window.innerWidth <= 680) {
      console.log(this.chartOptions);
      this.chartOptions.legend.position = "bottom";
    } else {
      this.chartOptions.legend.position = "right";
    }
  },
  data() {
    return {
      windowIsSmall: false,
      chartData: [
        ["Name", "Amount"],
        ["Наличные деньги", 1],
        ["Государственные ценные бумаги", 1],
        ["Корпоративные облигации в KZT и USD", 1],
        ["Корпоративные акции в KZT в USD", 1],
        ["Депозитарные расписки", 1],
        ["Вклады в банках", 1],
        ["Финансовые инструменты Инвестиционных фондов", 1],
        ["Индексные фонды облигаций и (ETFs)", 1],
        ["Инструменты денежного рынка (РЕПО и другое)", 1],
        ["Производные финансовые инструменты", 1],
      ],
      chartOptions: {
        title: "Структура активов фонда по видам финансовых инструментов:",
        width: window.innerWidth,
        height: window.innerWidth / 2,
        titleTextStyle: {
          bold: false,
          fontSize: 15,
        },
        tooltip: {
          textStyle: { color: "#000" },
          showColorCode: true,
          ignoreBounds: true,
        },
        chartArea: { width: "70%", height: "60%" },
        legend: { position: "bottom" },
      },
    };
  },
};
</script>
