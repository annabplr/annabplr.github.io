<template>
  <div class="menu">
    MENU
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">top</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">résumé</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">compétences</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">projets</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">contact</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">cv</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
