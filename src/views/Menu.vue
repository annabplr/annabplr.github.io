<template>
  <div class="menu">
    <ul class="menu--list">
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/">{{ $t('top') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/profil">{{ $t('skills') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/experience">{{ $t('projects') }}</router-link></li>
      <li class="menu--list-item"><router-link class="menu--list-item-link" to="/contact">{{ $t('contact') }}</router-link></li>
    </ul>
  </div>
</template>

<i18n>
{
  "fr": {
    "top": "top",
    "summary":"résumé",
    "skills":"profil",
    "projects": "expérience",
    "contact":"contact",
    "resume":"cv"
  },
  "en": {
    "top": "top",
    "summary":"summary",
    "skills":"profile",
    "projects": "projects",
    "contact":"contact",
    "resume":"resume"
  }
}
</i18n>

<script>

export default {
  name: 'Menu',
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
      @media(max-width:767px){
        display: inline-block;
        margin: .5rem .5rem;
      }
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
