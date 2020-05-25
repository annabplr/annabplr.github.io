<template>
  <div class="locale">
    <div :class="{'locale-item-selected': $i18n.locale === 'fr'}" class="locale-item" @click="$i18n.locale = 'fr'">
      {{ $t('fr') }}
    </div>
    <div :class="{'locale-item-selected': $i18n.locale === 'en'}" class="locale-item" @click="$i18n.locale = 'en'">
      {{ $t('en') }}
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
  }
  &-item {
    color: $second-light;
    margin-right: 1rem;
    letter-spacing: .25rem;
    border-bottom: .25rem solid transparent;
    cursor: pointer;
    &:hover, &-selected {
      font-weight: bolder;
      border-bottom: .25rem solid $second-light;
    }
  }
}
</style>
