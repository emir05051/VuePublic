<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings">
      <div class="slider_item">
        <img src="img/stats1.png" alt="" /><br />
        <h2>Активы</h2>
        <h3>3 646 207</h3>
        <h4>+35%</h4>
        <p>тыс.тенге</p>
      </div>
      <div class="slider_item">
        <img src="img/stats2.png" alt="" />
        <h2>Капитал</h2>
        <h3>3 029 398</h3>
        <h4>+28%</h4>
        <p>тыс.тенге</p>
      </div>
      <div class="slider_item">
        <img src="img/stats3.png" alt="" />
        <h2>Чистая прибыль</h2>
        <h3>658 416</h3>
        <h4>+21%</h4>
        <p>тыс.тенге</p>
      </div>
      <div class="slider_item">
        <img src="img/stats4.png" alt="" />
        <h2>ROE</h2>
        <h3>21,7</h3>
        <p>%</p>
      </div>
      <div class="slider_item">
        <img src="img/stats5.png" alt="" />
        <h2>ROA</h2>
        <h3>18,1</h3>
        <p>%</p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      dots: true,
      infinite: true,
      arrows: true,
      initialSlide: 0,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
};
</script>
