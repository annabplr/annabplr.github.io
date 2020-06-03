<template>
  <div class="locale">
    <div :class="{'locale-item-selected': $i18n.locale === 'fr'}" class="locale-item" @click="$i18n.locale = 'fr'">
      FR
    </div>
    <div :class="{'locale-item-selected': $i18n.locale === 'en'}" class="locale-item" @click="$i18n.locale = 'en'">
      EN
    </div>
  </div>
</template>

<script>
export default {
  name: 'Locale'
}
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";

.locale {
  width: 50%;
  display: flex;
  align-items: center;
  margin: 1rem;
  @media(max-width:767px){
    width: auto;
    margin: 0;
    height: 100%;
  }
  &-item {
    color: $second-light;
    margin-right: 1rem;
    letter-spacing: .15rem;
    border-bottom: .25rem solid transparent;
    opacity: .8;
    cursor: pointer;
    @media(max-width:767px){
      margin: .5rem;
      margin-top: 1em;
      font-size: .75rem;
      font-family: $font-black;
    }
    &:hover, &-selected {
      font-weight: bolder;
      opacity: 1;
      border-bottom: .25rem solid $second-light;
    }
  }
}
</style>
