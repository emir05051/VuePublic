<template>
  <div id="app">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      style="width: 900px; height: 500px"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
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
        titleTextStyle: {
          bold: false,
          fontSize: 15,
        },
        tooltip: {
          textStyle: { color: "#000" },
          showColorCode: true,
          ignoreBounds: true,
        },
        chartArea: { width: "100%", height: "70%" },
      },
    };
  },
};
</script>
