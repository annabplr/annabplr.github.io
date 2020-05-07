<template>
  <div id="app" class='app'>
    <router-view class="app--view" />
    <div class="app--menu">
      <Menu/>
      <Locale/>
    </div>
  </div>
</template>

<script>
import Menu from './views/Menu.vue'
import Locale from './views/Locale.vue'


export default {
  name: 'App',
  components: {
    Menu,
    Locale
  }
}
</script>

<style lang="scss">
@import "./assets/_variables.scss";
body {
  margin: 0;
  overflow-x: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
#app {
  font-family: $font-light;
  background-color: $main-dark;
  z-index: -1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.app {
  min-height: 100vh;
  &--view {
    width: 85%;
  }
  &--menu {
    position: fixed;
    right: 0;
    padding-top: 10%;
    height: 100vh;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.projects + .app--menu {
  background-color: $main-darker;
}
</style>
