<template>
  <div class="skills">
    <div class="skills-container">
      <h2 class="skills-container-title">
        {{ $t('title') }}
        <div class="skills-container-title-dots"></div>
      </h2>
      <div class="skills-group skills-right">
          <h3 class="skills-group-title">
            <span>
              {{ $t('me-title') }}
            </span>
          </h3>
          <div class="skills-group-data">
            <div class="skills-people-group">
              <img class="skills-people-image skills-people-image-face" src="../assets/female.svg" alt="">
              <img class="skills-people-image skills-people-image-star skills-people-image-star-1" src="../assets/star.svg" alt="">
              <img class="skills-people-image skills-people-image-star skills-people-image-star-2" src="../assets/star.svg" alt="">
              <img class="skills-people-image skills-people-image-star skills-people-image-star-3" src="../assets/star.svg" alt="">
              <img class="skills-people-image skills-people-image-star skills-people-image-star-4" src="../assets/star.svg" alt="">
            </div>
            <div class="skills-items">
              <div class="skills-items-background pink-blob"></div>
              <ul class="skills-items-list">
                <li> {{ $t('me-age') }} </li>
                <li> {{ $t('me-place') }} </li>
                <li v-for="item in perso" v-bind:key="item"> {{ $t('perso.' + item) }}</li>
              </ul>
            </div>
          </div>
      </div>
      <div class="skills-group skills-left">
          <h3 class="skills-group-title">
            <span>
              {{ $t('technical-title') }}
            </span>
          </h3>
          <div class="skills-group-data">
            <div class="skills-keyboard-group">
              <img class="skills-keyboard-image skills-keyboard-image-key" src="../assets/keyboards.svg" alt="">
              <img class="skills-keyboard-image skills-keyboard-image-left" src="../assets/hand-left.svg" alt="">
              <img class="skills-keyboard-image skills-keyboard-image-right" src="../assets/hand-right.svg" alt="">
            </div>
            <div class="skills-items">
              <div class="skills-items-background grey-blob"></div>
              <ul class="skills-items-list">
                <li v-for="item in tech" v-bind:key="item"> {{ $t('technical.' + item) }} </li>
              </ul>
            </div>
          </div>
      </div>
      <div class="skills-group skills-right">
        <h3 class="skills-group-title">
          <span>
            {{ $t('general-title') }}
          </span>
        </h3>
        <div class="skills-group-data">
          <div class="skills-items">
            <div class="skills-items-background pink-dots"></div>
            <ul class="skills-items-list">
              <li v-for="item in general" v-bind:key="item"> {{ $t('general.' + item) }} </li>
            </ul>
            <div class="skills-items-background grey-long-blob"></div>
          </div>
          <div class="skills-wheel-images">
            <div class="skills-wheel-group">
              <img class="skills-wheel-image" src="../assets/wheel.svg" alt="">
              <img class="skills-wheel-image skills-wheel-image-bis" src="../assets/wheel.svg" alt="">
              <img class="skills-wheel-image skills-wheel-image-ter" src="../assets/wheel.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="skills-group skills-left">
        <h3 class="skills-group-title">
          <span>
            {{ $t('like-title') }}
          </span>
        </h3>
        <div class="skills-group-data">
          <div class="skills-heart-group">
            <img class="skills-heart-image skills-heart-image-black" src="../assets/heart.svg" alt="">
            <img class="skills-heart-image skills-heart-image-color" src="../assets/heart-color.svg" alt="">
          </div>
          <div class="skills-items">
            <div class="skills-items-background grey-dots"></div>
            <ul class="skills-items-list">
              <li v-for="item in like" v-bind:key="item"> {{ $t('like.' + item) }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="skills-group skills-right">
        <h3 class="skills-group-title">
          <span>
            {{ $t('passion-title') }}
          </span>
        </h3>
        <div class="skills-group-data">
          <div class="skills-items">
            <div class="skills-items-background blob-mountain"></div>
            <ul class="skills-items-list">
              <li v-for="item in passion" v-bind:key="item">{{ $t('passion.' + item) }}</li>
            </ul>
          </div>
          <div class="skills-mountain-group">
            <img class="skills-mountain-image skills-mountain-image-black " src="../assets/altitude.svg" alt="">
            <!-- <img class="skills-mountain-image skills-mountain-image-color" src="../assets/mountains.svg" alt=""> -->
            <img class="skills-mountain-image skills-mountain-image-sun" src="../assets/sun2.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "fr": {
    "title": "profil & compétences",
    "me-title": "annabelle",
    "me-age": "31 ans",
    "me-place": "pays de gex - genève",
    "technical-title": "techniques",
    "technical": {
      "ruby": "ruby on rails",
      "html": "html / css / sass / bem / pug",
      "vueJS": "vueJS",
      "git": "git & github",
      "SQL": "SQL",
      "API": "API",
      "PWA": "PWA",
      "heroku": "heroku",
      "javascript": "javascript / jquery",
      "angular": "angular"
    },
    "general-title": "transverses",
    "general": {
      "project": "gestion de projets",
      "client": "relation clients",
      "slack": "slack",
      "trello": "trello/asana",
      "zapier": "zapier",
      "agile": "méthode agile",
      "figma": "figma / xd",
      "stripe": "stripe",
      "anglais" : "anglais" ,
      "adobe": "suite adobe",
      "toggle": "toggle / cloquify"
    },
    "perso-title": "savoir-être",
    "perso": {
      "curious": "curieuse",
      "rigorous": "rigoureuse",
      "autonomous": "autonome"
    },
    "like-title": "j'aime",
    "like": {
      "think": "me creuser la tête",
      "minimalism": "les designs minimalistes",
      "learn": "apprendre de nouvelles choses"
    },
    "passion-title": "mais aussi",
    "passion": {
      "lettering": "la calligraphie",
      "hiking": "la randonnée",
      "gardening": "le jardinage"
    }
  },
  "en": {
    "title": "skills",
    "me-title": "annabelle",
    "me-age": "31 years old",
    "me-place": "pays de gex - geneva",
    "technical-title": "technical",
    "technical": {
      "ruby": "ruby on rails",
      "html": "html / css / sass / bem / pug",
      "vueJS": "vueJS",
      "git": "git & github",
      "SQL": "SQL",
      "API": "API",
      "PWA": "PWA",
      "heroku": "heroku",
      "javascript": "javascript / jquery",
      "angular": "angular"
    },
    "general-title": "transversal",
    "general": {
      "project": "projects management",
      "client": "customer relationship",
      "slack": "slack",
      "trello": "trello/asana",
      "zapier": "zapier",
      "agile": "agile method",
      "figma": "figma / xd",
      "stripe": "stripe",
      "anglais" : "english" ,
      "adobe": "adobe suite",
      "toggle": "toggle / cloquify"
    },
    "perso-title": "personal",
    "perso": {
      "curious": "curious",
      "rigorous": "rigoureuse",
      "autonomous": "autonome"
    },
    "like-title": "j'aime",
    "like": {
      "think": "me creuser la tête",
      "minimalism": "les designs minimalistes",
      "learn": "apprendre de nouvelles choses"
    },
    "passion-title": "mais aussi",
    "passion": {
      "lettering": "la calligraphie",
      "hiking": "la randonnée",
      "gardening": "le jardinage"
    }
  }
}
</i18n>

"think": "me creuser la tête", "minimalism": "les designs minimalistes", "learn": "apprendre de nouvelles choses"

<script>
export default {
  name: 'Skills',
  data: function() {
    return {
      tech: ["ruby", "vueJS", "html", "git", "SQL", "API", "PWA", "heroku", "javascript", "angular"],
      general: ["project", "client", "slack", "trello", "zapier", "agile", "figma", "stripe", "anglais", "adobe", "toggle"],
      perso: ["curious", "rigorous", "autonomous"],
      like: ["think", "minimalism", "learn"],
      passion: ["lettering", "hiking", "gardening"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";
.skills {
  display: flex;
  justify-content: center;
  background-color: $main-dark;
  &-container {
    background-color: $second-dark;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    border-left: .5rem solid $second-light;
    border-right: .5rem solid $second-light;
    justify-content: space-around;
    width: 80%;
    max-width: 880px;
    &-title {
      font-family: $font-black;
      font-size: $size-h2;
      color: $black-dark;
      letter-spacing: 2px;
      position: relative;
      margin-bottom: 6rem;
      border-bottom: .4rem solid $black-dark;
      z-index: 10;
      &-dots {
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FCF7F8' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        z-index: -1;
        position: absolute;
        top: 0;
        right: 10%;
        width: 30%;
        height: 6rem;
      }
    }
  }
  &-group {
    width: 60%;
    position: relative;
    &-data {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      margin-left: .5rem;
      margin-right: .5rem;
      margin-bottom: 2rem;
      border: .4rem solid $black-dark;
      border-radius: 20px;
    }
    &-title {
      font-family: $font-black;
      font-size: $size-h3;
      text-align: right;
      padding-right: 5rem;
      line-height: 0.25;
      letter-spacing: 1px;
      span {
        padding: 0 .5rem;
        background-color: $second-dark;
      }
    }
  }
  &-items {
    position: relative;
    z-index: 0;
    &-background {
      position: absolute;
      left: -100%;
      top: 0;
      width: 100%;
      height: 100%;
      &.pink-dots {
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a30b37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: repeat-x repeat-y;
      }
      &.grey-dots {
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23464849' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: repeat-x repeat-y;
      }
      &.pink-blob {
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/blob-red.svg');
        height: 155%;
        left: -91%;
        width: 134%;
      }
      &.grey-blob {
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/blob-grey.svg');
        height: 110%;
        left: -75%;
        width: 83%;
      }
      &.grey-long-blob {
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/blob-long-grey.svg');
        height: 110%;
        width: 93%;
        left: auto;
        right: -78%;
      }
      &.blob-mountain {
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/blob-mountain.svg');
        height: 217%;
        width: 122%;
        left: auto;
        right: -105%;
      }
    }
    &-list {
      margin: 0;
      background-color: $second-light;
      padding: .5rem;
      z-index: 10;
      li {
        .imp {
          background-color: $main-darker;
        }
      }
    }
  }
  &-left {
    .skills-items-background.grey-dots {
      right: -130%;
      left: auto;
      width: 130%;
    }
  }
  &-right {
    margin-left: 40%;
    .skills-items-background {

    }
  }
  &-keyboard {
    &-group {
      position: relative;
      display: inline-flex;
      margin-right: .5rem;
      margin-bottom: 2.5rem;
      z-index: 10;
    }
    &-image {

      &-key {

      }
      &-left {
        position: absolute;
        width: 5rem;
        left: 0;
        bottom: -.5rem;
        animation-name: left-hand;
        animation-duration: 6000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      &-right {
        animation-name: right-hand;
        animation-duration: 7000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        position: absolute;
        width: 5rem;
        left: 50%;
        bottom: -50%;
      }
    }
  }
  &-mountain {
    &-group {
      position: relative;
      display: inline-flex;
      min-width: 8rem;
      min-height: 10rem;
      z-index:10;
      margin-bottom: 1.5rem;
      margin-left: .5rem;
    }
    &-image {
      position: absolute;
      &-black {
      }
      &-sun {
        animation-name: sun;
        animation-duration: 7000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 8rem;
        top: -1rem;
        left: -1rem;
      }
    }
  }
  &-heart {
    &-group {
      display: inline-flex;
      position: relative;
      min-width: 8rem;
      min-height: 10rem;
      z-index: 10;
    }
    &-image {
      position: absolute;
      &-black {

      }
      &-color {
        animation-name: fade;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 6s;
        animation-direction: alternate;
      }
    }
  }
  &-people {
    &-group {
      position: relative;
      display: inline-flex;
      z-index: 10;
    }
    &-image {
      &-face {
      }
      &-star {
        position: absolute;
        width: 1rem;
        animation-name: star;
        animation-duration: 8000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        &-1 {
          left: 1rem;
          top: 0.3rem;
          right: auto;
          bottom: auto;
        }
        &-2 {
          left: auto;
          right:0;
          top: auto;
          bottom: 3rem;
          animation-delay: 2000ms;
        }
        &-3 {
          left:.5rem;
          bottom: 4rem;
          right: auto;
          top: auto;
          animation-delay: 4000ms;
        }
        &-4 {
          right:1rem;
          top: 2.5rem;
          left: auto;
          bottom: auto;
          animation-delay: 6000ms;
        }
      }
    }
  }
  &-wheel {
    &-images {
      width: 50%;
      height: 10rem;
      position: relative;
    }
    &-group {
      position: absolute;
      left: 0;
      width: 50%;
      height: 3rem;
      animation-name: translate;
      animation-duration: 20000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      display: flex;
      align-items: center;
      z-index: 10;
    }
    &-image {
      position: absolute;
      width: 3rem;
      left: 25%;
      bottom: 0;
      animation-name: spin;
      animation-duration: 10000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      &-bis {
        animation-name: reverse-spin;
        width: 1.75rem;
        bottom: 2rem;
        left: calc(25% - 1.5rem)
      }
      &-ter {
        animation-name: reverse-spin;
        width: 1.45rem;
        left: calc(25% + 3rem);
        bottom: 0;
      }
    }
  }
}
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
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes heart {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
}
@keyframes reverse-spin {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(-360deg);
  }
}
@keyframes translate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8rem);
  }
  100% {
    transform: translateY(0);  }
}
@keyframes star {
  0% {
    opacity: 1;
  }
  25% {

    opacity: 0;
  }
  50% {

    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sun {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes left-hand {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(4rem);
  }
  40% {
    transform: translateY(2rem);
  }
  60% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
@keyframes right-hand {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-4rem);
  }
  40% {
    transform: translateY(-3rem);
  }
  60% {
    transform: translateY(-4rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
</style>
