<template>
  <div class="menu">
    <ul class="menu--list">
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/">{{ $t('top') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/resume">{{ $t('summary') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/competences">{{ $t('skills') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/projets">{{ $t('projects') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/contact">{{ $t('contact') }}</router-link></li>
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
<style scoped lang="scss">
@import "../assets/_variables.scss";

.menu {
 &--list {
   list-style-type: none;
   padding: 0;
   &-item {
     text-align: left;
     margin: 2rem .5rem;
     &-link {
       letter-spacing: .25rem;
       color: $second-light;
       border-bottom: .25rem solid transparent;
     }
     &-link:hover, .router-link-exact-active {
       font-weight: bolder;
       border-bottom: .25rem solid $second-light;
     }
   }
 }
}
</style>
