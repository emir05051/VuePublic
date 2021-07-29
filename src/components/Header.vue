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
              <router-link to="/structure" class="header_link">
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
        <HeaderBurger @toggleMenu="activateDropdown" />
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
    activateDropdown() {
      this.toggleDropdown("activate");
    },
    removeDropdown() {
      this.toggleDropdown("remove");
    },

    toggleDropdown(string) {
      let headerButton = document.querySelector(".header_burger");
      let headerMenu = document.querySelector(".header_menu");
      if (string === "activate") {
        document.body.classList.toggle("lock");
        headerButton.classList.toggle("active");
        headerMenu.classList.toggle("active");
      }
      if (string === "remove") {
        document.body.classList.remove("lock");
        headerButton.classList.remove("active");
        headerMenu.classList.remove("active");
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/header.scss";
</style>
