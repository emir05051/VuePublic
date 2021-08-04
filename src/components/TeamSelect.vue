<template>
  <div class="our_team">
    <div class="team_cards">
      <div class="team_cards_row">
        <Person
          imgSrc="akinov"
          name="Акинов Мурат"
          position="Председатель правления"
          description="В Компании работает с 2004 г. Опыт работы более 14 лет в управлении
            активами Магистр 'MSc in Quantitative Finance' в Adam Smith Business
            School (University of Glasgow). Член Совета Ассоциации Болашак.
            «Заслуженный финансист»"
        />
        <Person
          imgSrc="almerekova"
          name="Алмерекова Айнур"
          position="Заместитель председателя правления. Член правления"
          description="Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»"
        />
        <Person
          imgSrc="melanic"
          name="Меланич Маржан"
          position="Директор аналитического департамента. Член правления"
          description="Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»"
        />
      </div>
      <div class="team_cards_row">
        <Person
          imgSrc="none"
          name="Макпал Оразова"
          position="Заместитель директора департамента управления активами"
          description="Description"
        />
        <Person
          imgSrc="none1"
          name="Айдын Наурызбаев"
          position="Директор департамента торговых операций"
          description="Description"
        />
        <Person
          imgSrc="none2"
          name="Ашимова Ардак"
          position="Вице президент департамента торговых операций"
          description="Description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
export default {
  name: "TeamSelect",
  components: {
    Person,
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to);
    console.log(from);
    next();
  },
};
</script>
<style lang="scss">
@import "../assets/styles/team-select.scss";
</style>
