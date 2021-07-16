<template>
  <div id="app">
    <div class="header">
      <div class="container header_section">
        <div class="header_body">
          <a href="#" class="header_logo">
            <img src="@/assets/img/logo-securities.png" />
          </a>
          <nav class="header_menu">
            <ul class="header_list">
              <li>
                <a href="#" class="header_link">Структура портфеля</a>
              </li>
              <li>
                <a href="#team" class="header_link">Наша команда</a>
              </li>
              <li>
                <a href="#contacts" class="header_link">Контакты</a>
              </li>
            </ul>
          </nav>
          <!-- <router-link class="" to="/">Home</router-link> |
          <router-link to="/about">About</router-link> -->
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
