<template>
  <div class="our_team container">
    <div class="person_small" @click="open">
      <h3>Акинов Мурат</h3>
      <img src="img/akinov.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        В Компании работает с 2004 г. Опыт работы более 14 лет в управлении
        активами Магистр 'MSc in Quantitative Finance' в Adam Smith Business
        School (University of Glasgow). Член Совета Ассоциации Болашак.
        «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Алмерекова Айнур</h3>
      <img src="img/almerekova.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Маржан Меланич</h3>
      <img src="img/melanic.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Кто то</h3>
      <img src="img/unknown.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Кто то</h3>
      <img src="img/unkwnown1.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSelect",
  data: () => ({
    description: "",
  }),
  mounted() {
    if (window.innerWidth >= 540) {
      this.$router.push({ name: "OurTeam" });
    }
  },
  methods: {
    open(e) {
      let href = this.getSrc(e);
      let description = this.getDescription(e);
      let personName = this.getName(e);
      this.$router.push({
        name: "PersonDetails",
        params: { id: href, description, personName },
      });
    },
    getSrc(e) {
      let image = e.target.parentNode.children[1].src;
      let reg = /\w+/gm;
      return image.match(reg)[4];
    },
    getDescription(e) {
      return e.target.parentNode.children[2].innerHTML;
    },
    getName(e) {
      return e.target.parentNode.children[0].innerHTML;
    },
  },
};
</script>
<style></style>
