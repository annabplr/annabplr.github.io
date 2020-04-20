<template>
  <div class="skills">
    <h2 class="">{{ $t('title') }}</h2>
    <div class="skills-container">
      <div class="">
          <h3>
            {{ $t('technical-title') }}
          </h3>
        <div v-for="item in tech" v-bind:key="item">
          {{ $t('technical.' + item) }}
        </div>
      </div>
      <div class="">
        <h3>
          {{ $t('general-title') }}
        </h3>
        <div v-for="item in general" v-bind:key="item">
          {{ $t('general.' + item) }}
        </div>
      </div>
      <div class="">
        <h3>
          {{ $t('perso-title') }}
        </h3>
        <div v-for="item in perso" v-bind:key="item">
          {{ $t('perso.' + item) }}
        </div>
      </div>
      <div class="">
        <h3>
          {{ $t('like-title') }}
        </h3>
        <div v-for="item in like" v-bind:key="item">
          {{ $t('like.' + item) }}
        </div>
      </div>
      <div class="">
        <h3>
          {{ $t('passion-title') }}
        </h3>
        <div v-for="item in passion" v-bind:key="item">
          {{ $t('passion.' + item) }}
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "fr": {
    "title": "compétences",
    "technical-title": "techniques",
    "technical": {
      "ruby": "ruby on rails",
      "html": "html / css / sass",
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
    "technical-title": "technical",
    "technical": {
      "ruby": "ruby on rails",
      "html": "html / css / sass",
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
      tech: ["ruby", "html", "vueJS", "git", "SQL", "API", "PWA", "heroku", "javascript", "angular"],
      general: ["slack", "trello", "zapier", "agile", "figma", "stripe", "anglais", "adobe", "toggle"],
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
  &-container {
    display: flex;
    justify-content: space-around;
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
