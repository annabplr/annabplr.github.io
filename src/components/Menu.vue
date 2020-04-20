<template>
  <div class="menu">
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ $t('top') }}</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">{{ $t('summary') }}</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">{{ $t('skills') }}</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">{{ $t('projects') }}</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ $t('contact') }}</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ $t('resume') }}</a></li>
    </ul>
  </div>
</template>

<i18n>
{
  "fr": {
    "top": "top",
    "summary":"résumé",
    "skills":"compétences",
    "projects": "projets",
    "contact":"contact",
    "resume":"cv",
    "fr": "fr",
    "en":"en"
  },
  "en": {
    "top": "top",
    "summary":"summary",
    "skills":"skills",
    "projects": "projects",
    "contact":"contact",
    "resume":"resume",
    "fr": "fr",
    "en":"en"
  }
}
</i18n>

<script>

export default {
  name: 'Menu',
  components: {
  },
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
