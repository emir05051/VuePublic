<template>
  <div class="our_team container">
    <div class="person_small" @click="open">
      <h3>Акинов Мурат</h3>
      <h4 style="display: none">Председатель правления</h4>
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
      <h4 style="display: none">
        Заместитель председателя правления. Член правления
      </h4>
      <img src="img/almerekova.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Маржан Меланич</h3>
      <h4 style="display: none">
        Директор аналитического департамента. Член правления
      </h4>
      <img src="img/melanic.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Макпал Оразова</h3>
      <h4 style="display: none">
        Заместитель директора департамента управления активами
      </h4>
      <img src="img/unknown.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Айдын Наурызбаев</h3>
      <h4 style="display: none">Директор департамента торговых операций</h4>
      <img src="img/unkwnown1.jpg" style="width: 120px; height: 200px" />
      <p style="display: none">
        Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»
      </p>
    </div>
    <div class="person_small" @click="open">
      <h3>Ашимова Ардак</h3>
      <h4 style="display: none">
        Вице президент департамента торговых операций
      </h4>
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
      let href = this.getSrc(e.target.parentNode);
      let description = this.getDescription(e.target.parentNode);
      let position = this.getPosition(e.target.parentNode);
      let personName = this.getName(e.target.parentNode);

      this.$router.push({
        name: "PersonDetails",
        params: { id: href, description, personName, position },
      });
    },
    getSrc(element) {
      let image = element.getElementsByTagName("img")[0].src;
      let reg = /img\/(\w+)\./;
      return image.match(reg)[1];
    },
    getDescription(element) {
      return element.getElementsByTagName("p")[0].innerText;
    },
    getPosition(element) {
      return element.getElementsByTagName("h4")[0].innerText;
    },
    getName(element) {
      return element.getElementsByTagName("h3")[0].innerText;
    },
  },
};
</script>
<style></style>
