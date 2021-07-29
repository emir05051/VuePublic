<template>
  <div class="control_main">
    <div class="row control_container">
      <div>
        <p>Агентство РК по регулированию и развитию финансового рынка</p>
        <img
          src="https://www.election.gov.kz/theme/cik/images/symbolls/gerb-in.png"
          alt="gerb"
        />
        <span>Регулирование и надзор</span>
      </div>
      <div>
        <p>Единый накопительный пенсионный фонд</p>
        <img
          src="http://afk.kz/2112172-%D0%B5%D0%BD%D0%BF%D1%84-main.png"
          alt="gerb"
        />
        <span>Учет инвестиционного портфеля</span>
      </div>
      <div>
        <p>Банк-кастодиан</p>
        <img
          src="https://cumulus.sitecoredemo.com/-/media/Project/Demo-Shared-SXA-Sites/LighthouseLifestyle/Fins/personal/banking-checking-savings.png?h=518&iar=0&w=818&hash=69616AE97CC3221D4B6DFFC09AA17A75"
          alt="gerb"
        />
        <span>Проведение сделок и сверка инвестиционного портфеля</span>
      </div>
    </div>
    <div class="manager">
      <div>
        <h5>Требование к управляющим</h5>
      </div>
      <div>
        <ul class="manager_list">
          <li>Собственный капитал <span>≥ 3 млрд. тг </span></li>
          <li>Опыт управления портфелем в сумме <span>≥ 5 млрд. тг</span></li>
          <li><span>Отсутствие</span> убыточной деятельности</li>
          <li><span>Соблюдение</span> пруденциальных нормативов</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.control_container {
  justify-content: space-between;
  //   align-items: stretch;
  span {
    font-size: 11px;
    font-weight: bold;
  }
  p {
    height: 96px;
    text-align: center;
    color: #8390e2;
  }
  div {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 100px;
  }
}
.manager {
  margin-top: 1.75rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  h5 {
    color: #8390e2;
    font-weight: bold;
  }
  span {
    color: #8390e2;
    font-weight: bold;
  }
  .manager_list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 500px) {
  .manager {
    flex-direction: column;
  }
  .control_container {
    justify-content: center;
  }
}
</style>
