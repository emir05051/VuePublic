<template>
  <div class="w-100 d-flex col table">
    <div class="shares_table">
      <div class="shares_table_left">
        <img src="/img/MSM.jpeg" alt="icon-ishares" />
        <div class="ml-1">Министерство Финансов Республики Казахстан</div>
      </div>
      <div style="color: blue; margin-left: 5px">94,5%</div>
    </div>
    <div class="shares_table">
      <div class="shares_table_left">
        <img src="/img/telekom.png" alt="minfin" />
        <div class="ml-1">АО "Казахтелеком</div>
      </div>
      <div style="color: blue; margin-left: 5px">2,8%</div>
    </div>
    <div class="shares_table">
      <div class="shares_table_left">
        <img src="/img/kaztransjpg.jpg" alt="icon-vanguard" />
        <div class="ml-1">АО "КазТрансОйл"</div>
      </div>
      <div style="color: blue; margin-left: 5px">2,7%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shares",
};
</script>
<style lang="scss">
.table {
  justify-content: space-evenly;
  align-items: stretch;
}
.shares_table {
  display: flex;
  width: 60%;
  justify-content: space-between;
  font-size: calc(0.7vw + 1rem);
  img {
    width: 35px;
    height: 30px;
  }
}
@media (max-width: 1000px) {
  .shares_table {
    width: 100%;
  }
}
.shares_table_left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.structure {
  .footer_main {
    margin-top: 10px;
  }
}
</style>
