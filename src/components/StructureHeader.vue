<template>
  <div class="structure_body container">
    <h1>Показатели</h1>
    <div class="row mt-3">
      <div class="col-6 col-md-3 text-start">
        <div class="font-weight-bold font-size-big">
          13%
          <br />
          годовых
        </div>
        <div class="subtext">
          Целевой инвестиционный <br />
          доход
        </div>
      </div>
      <div class="col-6 col-md-3 text-start">
        <div class="font-weight-bold font-size-big">
          4,30%
          <br />
          на {{ DateNow }}
        </div>
        <div class="subtext">
          Увеличение стоимости одной условной единицы пенсионных активов с даты
          принятия в управление
        </div>
      </div>
      <div class="col-6 col-md-3 text-start">
        <div class="font-weight-bold font-size-big">
          1 868,4
          <br />
          млн тг
        </div>
        <div class="subtext">
          Чистая стоимость пенсионных активов под управлением по состоянию на
          {{ DateNow }}
        </div>
      </div>
      <div class="col-6 col-md-3 text-start">
        <div class="font-weight-bold font-size-big">
          0%
          <br />
          за управление
        </div>
        <div class="subtext">только 5% от инвестиционного дохода</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StructureHeader",
  data: () => ({
    data: new Date(),
  }),
  computed: {
    DateNow() {
      let date = this.addNull(this.data.getDate());
      let month = this.addNull(this.data.getMonth() + 1);
      let year = this.data.getFullYear();
      return `${date}.${month}.${year}`;
    },
  },
  methods: {
    addNull(date) {
      if (date < 10) {
        return `0${date}`;
      }
      return date;
    },
  },
};
</script>
