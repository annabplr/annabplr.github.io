<template>
  <div class="hello">
    <h2>{{ $t('title') }}</h2>
    <ul>
      <li>{{ $t('coding') }}</li>
      <li>{{ $t('writing') }}</li>
    </ul>
  </div>
</template>

<i18n>
{
  "fr": {
    "title": "en quelques mots",
    "coding": "je code",
    "writing":"j'écris"
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
