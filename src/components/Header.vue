<template>
  <header class="header">
    <div class="container header_section">
      <div class="header_body">
        <router-link to="/" class="header_logo">
          <img
            src="../../public/img/logo-securities.png"
            @click="removeDropdown"
          />
        </router-link>
        <nav class="header_menu">
          <ul class="header_list">
            <li>
              <router-link to="/home" class="header_link">
                <span @click="removeDropdown">Структура портфеля</span>
              </router-link>
            </li>
            <li>
              <router-link to="/team" class="header_link">
                <span @click="removeDropdown">Наша команда</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="header_link">
                <span @click="removeDropdown">Контакты</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <HeaderBurger @toggleMenu="activateMenu" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderBurger from "@/components/HeaderBurger.vue";
export default {
  name: "Header",
  components: {
    HeaderBurger,
  },

  methods: {
    activateMenu() {
      let headerButton = document.querySelector(".header_burger");
      let headerMenu = document.querySelector(".header_menu");
      document.body.classList.toggle("lock");
      headerButton.classList.toggle("active");
      headerMenu.classList.toggle("active");
    },
    removeDropdown() {
      let headerButton = document.querySelector(".header_burger");
      let headerMenu = document.querySelector(".header_menu");
      document.body.classList.remove("lock");
      headerButton.classList.remove("active");
      headerMenu.classList.remove("active");
    },
  },
};
</script>
<style></style>
