<template>
  <div id="app">
    <LandingPage/>
    <Menu/>
    <Locale/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import Menu from './components/Menu.vue'
import Locale from './components/Locale.vue'


export default {
  name: 'App',
  components: {
    LandingPage,
    Menu,
    Locale
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
