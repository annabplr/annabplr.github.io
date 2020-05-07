<template>
  <div class="hero">
    <div class="hero-blob hero-blob-1">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
      </svg>
    </div>
    <!-- <div class="hero-blob hero-blob-2">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
        <path d="M92.8,-66.3C117.8,-42.6,134,-4.2,126.2,28.4C118.5,61,86.8,87.7,41.8,123.4C-3.2,159.2,-61.5,203.9,-106.4,193C-151.3,182.1,-182.9,115.5,-181.7,59.1C-180.5,2.7,-146.6,-43.5,-110.8,-69.7C-75.1,-95.9,-37.5,-101.9,-1.8,-100.5C33.9,-99,67.8,-90,92.8,-66.3Z"/>
      </svg>
    </div> -->
    <div class="hero-container">
      <div class="hero-image">
        <img class="hero-image-img" alt="Profile picture" src="../assets/profile_pic.jpg">
      </div>
      <div class="hero-text">
        <h2 class="hero-text-subtitle">{{ $t('hello') }}</h2>
        <h1 class="hero-text-title"><span>{{ $t('firstname') }}</span>{{ $t('lastname') }} &zwnj;</h1>
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
    "firstname": "annabelle",
    "lastname": "PELLIER",
    "job":"et je suis développeuse web full-stack",
    "place":"vers Genève 🇨🇭"
  },
  "en": {
    "hello": "hi, I'm",
    "name": "annabelle PELLIER",
    "job":"and I'm a full-stack  web developer",
    "place":"near Geneva 🇨🇭"
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
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  &-blob {
    position: absolute;
    width: 50vmax;
    z-index: 0;
    &-1 {
      top: 0;
      left: 0;
      fill: $main-darker;
      animation: move 15s ease-in-out infinite;
      transform-origin: 50% 50%;
    }
    &-2 {
      bottom: 0;
      left: 0;
      fill: red;
      width: 600px;
      animation: little 20s ease-in-out infinite;
      transform-origin: 0 0;
    }
  }
  &-container {
    z-index: 10;
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
      // line-height: 2rem;
      font-family: $font-black;
      font-size: $size-h1;
      color: $second-light;
      // background-color: $black-dark;
      span {
        font-family: $font-light;
        letter-spacing: 2px;
      }
    }
    &-subtitle {
      margin: 0;
      font-family: $font-light;
      font-size: $size-h2-landing;
      color: $second-light;

      // color: $black-dark;
    }
  }

  @keyframes move {
    0%   { transform: scale(1)   translate(10px, -30px); }
    38%  { transform: scale(0.8, 0.9) translate(45vw, 30vh) rotate(160deg);}
    40%  { transform: scale(0.8, 0.9) translate(45vw, 30vh) rotate(160deg); }
    78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);}
    80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
    100% { transform: scale(1)   translate(10px, -30px); }
  }
  @keyframes little {
    0%   { transform: scale(1) translate(10px, 60px); }
    38%  { transform: scale(0.8, 0.9) translate(45vw, 30vh) rotate(160deg);}
    40%  { transform: scale(0.8, 0.9) translate(45vw, 30vh) rotate(160deg); }
    78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);}
    80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
    100% { transform: scale(1)   translate(10px, -30px); }
  }
}
</style>
