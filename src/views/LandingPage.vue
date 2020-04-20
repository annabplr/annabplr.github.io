<template>
  <div class="hero">
    <div class="hero-container">
      <div class="hero-image">
        <img class="hero-image-img" alt="Profile picture" src="../assets/profile_pic.jpg">
      </div>
      <div class="hero-text">
        <h2 class="hero-text-subtitle">{{ $t('hello') }}</h2>
        <h1 class="hero-text-title">{{ $t('name') }} &zwnj; &zwnj;</h1>
        <h2 class="hero-text-subtitle">{{ $t('job') }}</h2>
        <h2 class="hero-text-subtitle">{{ $t('place') }}</h2>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "fr": {
    "hello": "hello, je m'appelle",
    "name": "annabelle PELLIER",
    "job":"et je suis développeuse web full-stack",
    "place":"à Genève 🇨🇭"
  },
  "en": {
    "hello": "hi, I'm",
    "name": "annabelle PELLIER",
    "job":"and I'm a full-stack  web developer",
    "place":"in Geneva 🇨🇭"
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
<style scoped lang="scss">
@import "../assets/_variables.scss";

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  &-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-image {
    margin-right: 2rem;
    &-img {
      width: 150px;
      border-radius: 50%;
    }
  }
  &-text {
    text-align: right;
    &-title {
      margin: .5rem 0;
      margin-bottom: .8rem;
      transform: translate(1rem);
      line-height: 2rem;
      font-family: $font-black;
      font-size: $size-h1;
      color: $second-light;
      background-color: $black-dark;
    }
    &-subtitle {
      margin: 0;
      font-family: $font-light;
      font-size: $size-h2;
      color: $black-dark;
    }
  }
}
</style>
