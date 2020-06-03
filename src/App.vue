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

html {
  @media (max-width:767px) {
    font-size: 80%;
  }
}
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
    @media(max-width:767px){
      width: 100%;
    }
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
    @media(min-width:421px) and (max-width:767px){
      top: 0;
      left: 0;
      height: 2rem;
      width: 80%;
      margin-left: 10%;
      flex-direction: row;
      justify-content: center;
      padding-top: 2%;
    }
    @media(max-width:420px){
      top: 0;
      left: 0;
      height: 2.75rem;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      padding-top: 2%;
      .locale {
        flex-direction: column;
        &-item {
          margin-top: 0;
          margin-bottom: .25rem;
        }
      }
    }
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
.skills + .app--menu, .projects + .app--menu {
  @media(max-width:767px){
    z-index: 1000;
    background: $second-dark;
  }
}
</style>
