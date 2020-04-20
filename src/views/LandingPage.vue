<template>
  <div class="LandingPage">
    <img alt="Profile picture" src="../assets/profile_pic.jpg">
    <h1>{{ $t('hello') }}</h1>
    <h2>{{ $t('job') }}</h2>
    <h2>{{ $t('place') }}</h2>
  </div>
</template>

<i18n>
{
  "fr": {
    "hello": "hello, je m'appelle annabelle PELLIER,",
    "job":"et je suis développeuse web full-stack",
    "place":"à Genève"
  },
  "en": {
    "hello": "hi, I'm annabelle PELLIER,",
    "job":"and I'm a full-stack  web developer",
    "place":"in Geneva"
  }
}
</i18n>


<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 150px;
}
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
