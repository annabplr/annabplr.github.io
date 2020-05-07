<template>
  <div class="hello">
    <h2>{{ $t('title') }}</h2>
    <ul>
      <li>{{ $t('coding') }}</li>
      <li>{{ $t('writing') }}</li>
      <li>{{ $t('presentation') }}</li>

    </ul>
  </div>
</template>

<i18n>
{
  "fr": {
    "title": "en quelques mots",
    "coding": "je code",
    "writing":"j'écris",
    "presentation": "je m'appelle Annabelle, j'ai 31 ans et je code depuis plus de 2 ans. Originaire de la Drôme, et après avoir vécue à Paris et Lyon, je vis à présent à proximité de Genève. "
  },
  "en": {
    "title": "in a few words",
    "coding": "I code",
    "writing":"I write"
  }
}
</i18n>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
