<template>
  <div class="projects">
    <div class="projects-container">
      <h2>{{ $t('title') }}</h2>
      <transition name="projects-buttons">
        <div class="projects-buttons">
            <div class="projects-buttons-each" @click= "pro = true" :key="1" >
              <!-- <div v-show="pro == true" class="projects-buttons-each-background"></div> -->
              <h3 class="projects-buttons-each-name" :class="{selected : (pro === true)}">
                {{ $t('projects') }}
              </h3>
            </div>
            <div class="projects-buttons-each" @click= "pro = false" :key="2">
              <!-- <div v-show="pro == false" class="projects-buttons-each-background"></div> -->
              <h3 class="projects-buttons-each-name" :class="{selected : (pro === false)}">
                {{ $t('side') }}
              </h3>
            </div>
        </div>
      </transition>
      <div v-show="pro == true" class="projects-pro">
        <div class="">{{ $t('projects-subtitle') }}</div>
        <div class="projects-pro-each" v-for="(item, index) in proProjects" v-bind:key="item">
          <div :class="{selected : (proDisplay === index)}"
              class="projects-pro-each-left"
              @click= "proProjectsDisplay(index)">
            <h4>
              {{ $t(item) }} <span class="" v-for="lang in $t(item + '-lang')" v-bind:key="lang"> {{lang}} </span>
            </h4>
          </div>
          <div class="projects-pro-each-right" v-show="proDisplay === index">
            <p>{{ $t(item + '-details') }}</p>
            <ul v-if="$t(item + '-list') !== ' '">
              <li v-for="task in $t(item + '-list')" v-bind:key="task"> {{task}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-show="pro == false" class="projects-side">
        <div class="">{{ $t('side-subtitle') }}</div>

        <div class="projects-buttons">
          <div @click="selectedProject = item" class="projects-buttons-each" v-for="item in sideProjects" v-bind:key="item">
            {{ item }}
          </div>
        </div>
        <div class="projects-content">
          <div class="projects-content-left">
            <h3 class="projects-content-title">
              {{ selectedProject }}
            </h3>
            <div class="projects-content-text">
              {{ $t(selectedProject + '.tech') }}
              {{ $t(selectedProject + '.summary') }}
            </div>
          </div>
          <div class="projects-content-right">
            <div class="projects-content-image">
              <img :src="require(`@/assets/${selectedProject}-${selectedImage}.jpg`)" alt="">
            </div>
            <div class="projects-content-thumbnail">
              <img @click="selectedImage = 1" :src="require(`@/assets/${selectedProject}-1.jpg`)" alt="">
              <img @click="selectedImage = 2" :src="require(`@/assets/${selectedProject}-2.jpg`)" alt="">
              <img @click="selectedImage = 3" :src="require(`@/assets/${selectedProject}-3.jpg`)" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "fr": {
    "title": "expérience",
    "projects": "expérience professionnelle",
    "projects-subtitle": "En 2019 et 2020, en tant que Développeuse Web FullStack au sein de l'agence web Kinoba (Lyon), j'ai eu l'opportunité de travailler sur 3 gros projets :",
    "jitaku": "un projet permettant aux promoteurs immobiliers de gérer les logements livrés à des particuliers",
    "jitaku-lang": ["Ruby On Rails", "AngularJs"],
    "jitaku-details": "pour ce projet très conséquent, j'ai participé à l'amélioration de fonctionnalités existantes et à l'ajout de nouvelles fonctionnalités, tant en back qu'en front, sur des thématiques très diverses :",
    "jitaku-list": ["génération de pdf", "mise en place d'éditeur WYSIWYG (Froala)", "gestion d'une partie Admin (ActiveAdmin)", "gestion de devis et de factures", "envoi de mails", "téléchargement de documents", "création d'enquêtes satisfaction", "synthèse d'enquêtes satisfaction", "création de graphiques (chart.js)", "tests", "etc."],
    "packengers": "un projet de site vitrine pour une société de transporteurs innovante",
    "packengers-lang": ["Vue.js"],
    "packengers-list": " ",
    "packengers-details": "pour ce projet, que j'ai mené de A à Z, j'ai pu améliorer mes compétences en Vue.js, notamment sur la partie Animations/Transitions ainsi que sur la Responsivité car le site a le comportement d'une application mobile.",
    "e-succession": "un projet s'adressant à des particuliers auxquels les notaires font appel pour générer leurs declarations de succession",
    "e-succession-lang": ["Ruby On Rails","Angular 8"],
    "e-succession-list": " ",
    "e-succession-details": "pour ce projet, j'ai participé à la création du back-end de l'application, ainsi qu'à la création des tests, et à la génération du document Cerfa final, généré en PDF. J'ai également eu des missions en front-end, notamment à la création de pages du formulaire, présentant de nombreuses conditions.",
    "side": "side projects",
    "side-subtitle": "sur mon temps personnel, et pour développer mes compétences dans certains langages, j'ai développé 2 applications web",
    "pauzi": {
      "tech": "Pauzi est une Progressive Web App développée en Ruby on Rails et Vue.js, avec une utilisation principalement sur smartphone.",
      "summary": "Pauzi est une application web pour amener du positif dans sa vie. Elle permet de sauvegarder chaque jour une pensée positive ou une connaissance apprise dans la journée, et de pouvoir les relire les jours de moins bien."
    },
    "batchka": {
      "tech": "batchka est une Progressive Web App développée en Ruby on Rails, sans framework front, avec une utilisation principalement sur smartphone.",
      "summary": "Batchka permet de prévoir son menu de la semaine à la maison. l'une de ses principales fonctionnalités est de générer un menu pour la semaine, une to-do list et une liste de courses en fonction des choix faits initialement. "
    }
  },
  "en": {
    "title": "experience",
    "projects": "professional experience",
    "projects-subtitle": "In 2019 et 2020, en poste au sein de l'agence web Kinoba (Lyon), en tant que Développeuse Web FullStack, j'ai eu l'opportunité de travailler sur 3 gros projets :",
    "jitaku": "un projet s'addressant à des promoteurs immobiliers",
    "jitaku-lang": ["Ruby On Rails", "AngularJs"],
    "jitaku-details": "pour ce projet très conséquent, j'ai participé à l'amélioration de fonctionnalités existantes et à l'ajout de nouvelles fonctionnalités, tant en back qu'en front, sur des thématiques très diverses :",
    "jitaku-list": ["génération de pdf", "mise en place d'éditeur WYSIWYG (Froala)", "gestion d'une partie Admin (ActiveAdmin)", "gestion de devis et de factures", "envoi de mails", "téléchargement de documents", "création d'enquêtes satisfaction", "synthèse d'enquêtes satisfaction", "création de graphiques (chart.js)", "tests", "etc."],
    "packengers": "un projet de site vitrine pour une société de transporteurs innovante",
    "packengers-lang": ["Vue.js"],
    "packengers-list": " ",
    "packengers-details": "pour ce projet, que j'ai mené de A à Z, j'ai pu améliorer mes compétences en Vue.js, notamment sur la partie Animations/Transitions ainsi que sur la Responsivité car le site a le comportement d'une application mobile.",
    "e-succession": "un projet s'adressant à des particuliers auxquels les notaires font appel pour générer leurs declarations de succession",
    "e-succession-lang": ["Ruby On Rails","Angular 8"],
    "e-succession-list": " ",
    "e-succession-details": "pour ce projet, j'ai participé à la création du back-end de l'application, ainsi qu'à la création des tests, et à la génération du document Cerfa final, généré en PDF. J'ai également eu des missions en front-end, notamment à la création de pages du formulaire, présentant de nombreuses conditions.",
    "side": "side projects",
    "side-subtitle": "sur mon temps personnel, et pour développer mes compétences dans certains langages, j'ai développé 2 applications web",
    "pauzi": {
      "tech": "Pauzi est une Progressive Web App développée en Ruby on Rails et Vue.js, avec une utilisation principalement sur smartphone.",
      "summary": "Pauzi est une application web pour amener du positif dans sa vie. Elle permet de sauvegarder chaque jour une pensée positive ou une connaissance apprise dans la journée, et de pouvoir les relire les jours de moins bien."
    },
    "batchka": {
      "tech": "batchka est une Progressive Web App développée en Ruby on Rails, sans framework front, avec une utilisation principalement sur smartphone.",
      "summary": "Batchka permet de prévoir son menu de la semaine à la maison. l'une de ses principales fonctionnalités est de générer un menu pour la semaine, une to-do list et une liste de courses en fonction des choix faits initialement. "
    }
  }
}
</i18n>

<script>
export default {
  name: 'Projects',
  data: function() {
    return {
      sideProjects: ["pauzi", "batchka"],
      proProjects: ["jitaku", "packengers", "e-succession"],
      selectedProject: 'pauzi',
      selectedImage: 1,
      pro: true,
      proDisplay: 0
    }
  },
  mounted() {
    this.selectedProject = 'pauzi';
  },
  methods: {
    proProjectsDisplay(i) {
      if (this.proDisplay !== i) {
        this.proDisplay = i
      } else {
        this.proDisplay = 3
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

.projects {
  display: flex;
  justify-content: center;
  text-align: left;
  &-container {
    width: 80%;
  }
  &-buttons {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    &-each {
      cursor: pointer;
      &-name {
        margin: 0;
        z-index: 1;
        padding: 2rem;
        opacity: .7;
        &.selected {
          opacity: 1;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url('../assets/blob-shape.svg');
        }
      }
    }
    &-enter {
      .background {
        background-color: red;
      }
    }
    &-leave {
      .background {
        background-color: blue;
      }
    }
  }
  &-pro {
    &-each {
      display: flex;
      min-height: 10rem;
      &-left {
        width: 40%;
        h4 {
          padding: .15rem;
          border-right: .25rem solid transparent;
        }
        &.selected h4 {
          border-right: .25rem solid $main-darker;
        }
        span {
          background-color: $black-light;
          color: $second-light;
          padding: 0 .75rem 0 .25rem;
          margin: .5rem;
        }
      }
      &-right {
        padding: 0 1rem;
        width: 50%;
      }
    }
  }
  &-content {
    display: flex;
    &-right {
      min-width: 40%;
    }
    &-image {
      img {
        width: 300px;
      }
    }
    &-thumbnail {
      img {
        width: 50px;
      }
    }
  }
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
