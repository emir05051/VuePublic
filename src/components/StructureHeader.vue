<template>
  <div class="structure_body container">
    <h3 class="mt-3 font-size-big_header">
      <b>Наши финансовые показатели:</b>
    </h3>
    <div class="row mt-3 w-100">
      <div class="col-4 col-md-4 info">
        <div class="font-weight-bold font-size-big">
          10 - 15% <span>годовых</span>
        </div>
        <div class="subtext">Целевой инвестиционный <span> доход </span></div>
      </div>
      <div class="col-4 col-md-4 info">
        <div class="font-weight-bold font-size-big">
          462
          <span> млн тг </span>
        </div>
        <div class="subtext">
          Чистая стоимость пенсионных активов по состоянию на
          {{ DateNow }}
        </div>
      </div>
      <div class="col-4 col-md-4 info">
        <div class="font-weight-bold font-size-big">
          7.5%
          <span> за управление </span>
        </div>
        <div class="subtext">Только от инвестиционного дохода, 1 раз в год</div>
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
<style lang="scss">
.subtext {
  color: #709dcc;
  font-size: 16px !important;
  font-weight: bolder;
}
</style>
