<template>
  <div class="locale">
    <div class="locale-item" @click="$i18n.locale = 'fr'">
      {{ $t('fr') }}
    </div>
    <div class="locale-item" @click="$i18n.locale = 'en'">
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
  &-item {
    color: $black-dark;
    margin-right: 1rem;
    letter-spacing: .25rem;
    border-bottom: .25rem solid transparent;
    cursor: pointer;
    &:hover {
      font-weight: bolder;
      border-bottom: .25rem solid $black-dark;
    }
  }
}
</style>
