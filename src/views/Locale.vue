<template>
  <div class="Locale">
    <div class="" @click="$i18n.locale = 'fr'">
      {{ $t('fr') }}
    </div>
    <div class="" @click="$i18n.locale = 'en'">
      {{ $t('en') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Locale'
}
</script>
