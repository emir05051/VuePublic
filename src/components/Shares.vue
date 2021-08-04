<template>
  <div>
    <table class="shares_table">
      <tbody>
        <tr>
          <td>
            <img src="/img/MSM.jpeg" width="35px" alt="icon-ishares" />
          </td>
          <td>Министерство Финансов Республики Казахстан</td>
          <td>94,5%</td>
        </tr>

        <tr>
          <td>
            <img src="/img/telekom.png" width="35px" alt="minfin" />
          </td>
          <td>АО "Казахтелеком"</td>
          <td>2,8%</td>
        </tr>
        <tr>
          <td>
            <img src="/img/kaztransjpg.jpg" width="35px" alt="icon-vanguard" />
          </td>
          <td>АО "КазТрансОйл"</td>
          <td>2,7%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Shares",
};
</script>
<style lang="scss">
.shares_table {
  tr {
    text-align: start;
  }
}
.structure {
  .footer_main {
    margin-top: 10px;
  }
}
</style>
