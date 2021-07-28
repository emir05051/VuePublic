<template>
  <div class="our_team container">
    <div class="team_cards">
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
      <Person
        imgSrc="none"
        name="Unknown"
        position="Position"
        description="Description"
      />
      <Person
        imgSrc="none1"
        name="Unknown"
        position="Position"
        description="Description"
      />
      <Person
        imgSrc="none2"
        name="Unknown"
        position="Position"
        description="Description"
      />
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
<style>
.team_cards {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.team_cards img {
  width: 180px;
  border: 1px solid black;
}
img.active {
  width: 30%;
}
@media (min-width: 768px) and (max-width: 992px) {
  img.active {
    width: 50%;
  }
}
@media (max-width: 768px) {
  img.active {
    width: 50%;
  }
}
@media (max-width: 500px) {
  img.active {
    min-width: 270px;
  }
}
</style>
