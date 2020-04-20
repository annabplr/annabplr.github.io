<template>
  <div id="app">
    <router-view/>
    <Menu/>
    <Locale/>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
