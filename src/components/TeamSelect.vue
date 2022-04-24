<template>
  <div class="ml-4 mr-4">
    <div class="team_cards">
      <div class="team_cards_row">
        <Person
          imgSrc="none4"
          name=""
          position="Председатель правления"
          description="В Компании работает с 2004 г. Опыт работы более 14 лет в управлении
            активами Магистр 'MSc in Quantitative Finance' в Adam Smith Business
            School (University of Glasgow). Член Совета Ассоциации Болашак.
            «Заслуженный финансист»"
        />
        <Person
          imgSrc="none5"
          name=""
          position="Заместитель председателя правления. Член правления"
          description="Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»"
        />
        <Person
          imgSrc="none6"
          name=""
          position="Директор аналитического департамента. Член правления"
          description="Стаж работы в финансовой сфере более 10 лет «Заслуженный финансист»"
        />
      </div>
      <div class="team_cards_row">
        <Person
          imgSrc="none"
          name=""
          position="Заместитель директора департамента управления активами"
          description="Description"
        />
        <Person
          imgSrc="none1"
          name=""
          position="Директор департамента торговых операций"
          description="Description"
        />
        <Person
          imgSrc="none2"
          name=""
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
