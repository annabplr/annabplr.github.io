<template>
  <div class="menu">
    <ul>
      <li><router-link to="/">{{ $t('top') }} </router-link></li>

      <li><router-link to="/resume">{{ $t('summary') }}</router-link></li>
      <li><router-link to="/competences">{{ $t('skills') }}</router-link></li>
      <li><router-link to="/projets">{{ $t('projects') }}</router-link></li>
      <li><router-link to="/contact">{{ $t('contact') }}</router-link></li>
      <li><router-link to="/">{{ $t('resume') }}</router-link></li>
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
