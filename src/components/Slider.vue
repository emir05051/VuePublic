<template>
  <div class="container slider">
    <hooper :infiniteScroll="true" :centerMode="true">
      <slide>
        <div class="card card_item">
          <img src="img/akinov.jpg" alt="Акинов Мурат" />
          <div class="card-body">
            <h5>Председатель правления</h5>
            <h4>АКИНОВ МУРАТ</h4>
            <p class="card-text">
              В Компании работает с 2004 г. Опыт работы более 14 лет в
              управлении активами Магистр "MSc in Quantitative Finance" в Adam
              Smith Business School (University of Glasgow). Член Совета
              Ассоциации Болашак. «Заслуженный финансист»
            </p>
          </div>
        </div>
      </slide>

      <slide>
        <div class="card card_item">
          <img src="img/almerekova.jpg" alt="Алмерекова Айнур" />
          <div class="card-body">
            <h5>Заместитель председателя правления. Член правления</h5>
            <h4>АЛМЕРЕКОВА АЙНУР</h4>
            <p class="card-text">
              Стаж работы в финансовой сфере более 10 лет «Заслуженный
              финансист»
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="card card_item">
          <img src="img/melanic.jpg" alt="Меланич Маржан" />
          <div class="card-body">
            <h5>Директор аналитического департамента. Член правления</h5>
            <h4>МЕЛАНИЧ МАРЖАН</h4>
            <p class="card-text">
              Стаж работы в финансовой сфере более 10 лет «Заслуженный
              финансист»
            </p>
          </div>
        </div>
      </slide>
    </hooper>
  </div>
</template>
<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Slider",
  components: {
    Hooper,
    Slide,
  },
};
</script>
<style>
@media (max-width: 768px) {
  .hooper-slide .card img {
    height: 420px !important;
    width: 225px !important;
  }
  .hooper-slide h5 {
    font-size: 1em !important;
  }
  .hooper-slide h4 {
    font-size: 1.5em !important;
  }
  .hooper-slide .card-text {
    margin-top: 1.4em !important;
    font-size: 1.3em !important;
  }
}
@media (max-width: 576px) {
  .hooper-slide .card img {
    height: 280px !important;
    width: 150px !important;
  }
  .hooper-slide h5 {
    font-size: 1em !important;
  }
  .hooper-slide h4 {
    font-size: 1em !important;
  }
  .hooper-slide .card-text {
    font-size: 1em !important;
  }
}
@media (max-width: 360px) {
  .hooper-slide .card img {
    height: 180px !important;
    width: 140px !important;
    align-self: center !important;
    float: left !important;
  }
  .hooper-slide h5 {
    font-size: 0.7em !important;
  }
  .hooper-slide h4 {
    font-size: 0.8em !important;
  }
  .hooper-slide .card-text {
    margin-top: 0.7em !important;
    font-size: 0.7em !important;
  }
}
.hooper-slide .card img {
  height: 560px;
  width: 300px;
}
.hooper-slide h5 {
  font-size: 1.75em;
}
.hooper-slide h4 {
  font-size: 2em;
}
.hooper-slide .card-text {
  margin-top: 0.6em;
  font-size: 1.45em;
}

.hooper-list {
  height: 560px;
}

.hooper-slide .card {
  flex-direction: row;
}
</style>
