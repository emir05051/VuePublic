<template>
  <div class="graph w-100">
    <GChart type="ColumnChart" :data="chartData" @ready="onReady" />
  </div>
</template>

<script>
export default {
  name: "Column2",
  data() {
    return {
      chartData: null,
    };
  },
  methods: {
    onReady(chart, google) {
      var data = google.visualization.arrayToDataTable([
        ["", "Средняя доходность ПИФов УК", "Инфляция", "Доходность ЕНПФ"],
        [
          "2011",
          { v: -8.9, f: "-8.9%" },
          { v: 7.4, f: "7.4%" },
          { v: 2.6, f: "2.6%" },
        ],
        [
          "2012",
          { v: 11.7, f: "11.7%" },
          { v: 6.0, f: "6.0%" },
          { v: 4.0, f: "4.0%" },
        ],
        [
          "2013",
          { v: 9.0, f: "9.0%" },
          { v: 4.8, f: "4.8%" },
          { v: 2.4, f: "2.4%" },
        ],
        [
          "2014",
          { v: 10.2, f: "10.2%" },
          { v: 7.4, f: "7.4%" },
          { v: 6.3, f: "6.3%" },
        ],
        [
          "2015",
          { v: 74.2, f: "74.2%" },
          { v: 13.6, f: "13.6%" },
          { v: 15.7, f: "15.7%" },
        ],
        [
          "2016",
          { v: 10.3, f: "10.3%" },
          { v: 8.5, f: "8.5%" },
          { v: 7.9, f: "7.9%" },
        ],
        [
          "2017",
          { v: 13.0, f: "13.0%" },
          { v: 7.1, f: "7.1%" },
          { v: 7.9, f: "7.9%" },
        ],
        [
          "2018",
          { v: 5.7, f: "5.7%" },
          { v: 5.3, f: "5.3%" },
          { v: 11.3, f: "11.3%" },
        ],
        [
          "2019",
          { v: 27.8, f: "27.8%" },
          { v: 5.4, f: "5.4%" },
          { v: 6.6, f: "6.6%" },
        ],
        [
          "2020",
          { v: 49.5, f: "49.5%" },
          { v: 7.5, f: "7.5%" },
          { v: 10.9, f: "10.9%" },
        ],
      ]);
      var view = new google.visualization.DataView(data);
      console.log(window.innerWidth);
      view.setColumns([
        0,
        1,
        {
          calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation",
        },
        2,
        {
          calc: "stringify",
          sourceColumn: 2,
          type: "string",
          role: "annotation",
        },
        3,
        {
          calc: "stringify",
          sourceColumn: 3,
          type: "string",
          role: "annotation",
        },
      ]);

      var options = {
        vAxis: {
          gridlines: { count: 0 },
          textStyle: {
            fontSize: 1,
            color: "White",
          },
        },

        width: window.innerWidth - 35,
        height: 500,
        colors: ["#7570b3", "#d95f02", "#1b9e77"],
        legend: { position: "bottom" },
        chartArea: { width: "80%", height: "80%" },
        annotations: {
          textStyle: {
            fontSize: 14,
            bold: true,
            color: "#000",
            auraColor: "transparent",
            opacity: 1,
          },
        },
      };
      chart.draw(view, options);
    },
  },
};
</script>

<style>
.graph {
  margin-left: auto;
  margin-right: auto;
}
</style>
