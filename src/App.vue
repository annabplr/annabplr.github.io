<template>
  <div id="app" class='app'>
    <div class="app--view">
      <router-view/>
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
    border: 3px solid green

  }
  &--menu {
    width: 15%;
    border: 3px solid blue
  }

}
.menu {
  border: 1px solid red;
}
</style>
