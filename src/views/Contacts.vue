<template>
  <div class="about">
    <div class="padding"></div>
    <div id="contacts" class="contact_content container row">
      <h1 style="margin: 0 auto">АО «СЕНТРАС СЕКЬЮРИТИЗ»</h1>
      <div class="about_container">
        <div class="row col-12 col-md-12 col-lg-6 col-xl-6 contact_link">
          <div class="col-md-5 col-lg-5 card border_map contact_item">
            <a href=""><img src="img/map.png" alt="" /></a>
            <h6>Адрес</h6>
            <p class="card_text">
              <b>Республика Казахстан, г. Алматы, ул. Манаса, 32А</b>
            </p>
          </div>
          <div class="col-md-5 col-lg-5 card border_call contact_item">
            <a href="tel:+77272598877"><img src="img/call.png" /></a>
            <h6>Контактный телефон</h6>
            <a href="tel:+77272598877"
              ><p class="card_text" style="min-width: 150px">
                +7 (727) 259 88 77
              </p></a
            >
          </div>
          <div class="col-md-5 col-lg-5 card border_email contact_item">
            <a href="mailto:info@centras.kz"><img src="img/email.png" /></a>
            <h6>E-mail адрес</h6>
            <p class="card_text"><b>info@centras.kz</b></p>
          </div>
          <div class="col-md-5 col-lg-5 card border_earth contact_item">
            <a href="/" target="_blank"><img src="img/earth.png" /></a>
            <h6>Официальный WEB-сайт</h6>
            <a href="/" target="_blank"
              ><p class="card_text">www.cesec.kz</p></a
            >
          </div>
        </div>
        <div class="col-md-6 contact_call">
          <keep-alive>
            <script
              type="application/javascript"
              data-b24-form="inline/9/zgsrsi"
              data-skip-moving="true"
            >
              (function (w, d, u) {
                var s = d.createElement("script");
                s.async = true;
                s.src = u + "?" + ((Date.now() / 180000) | 0);
                var h = d.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(s, h);
              })(
                window,
                document,
                "https://cdn-ru.bitrix24.ru/b14106956/crm/form/loader_9.js"
              );
            </script>
          </keep-alive>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Contacts",
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/contact.scss";
</style>
