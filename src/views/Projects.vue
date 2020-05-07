<template>
  <div class="projects">
    <div class="projects-container">
      <h2 class="projects-container-title">
        {{ $t('title') }}
        <div class="projects-container-title-dots"></div>
      </h2>
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
        <div class="projects-pro-description">{{ $t('projects-subtitle') }}</div>
        <div class="projects-pro-each">
          <div :class="{selected : (proDisplay === proProjects[index])}"
              class="projects-pro-each-left"
              @click= "proProjectsDisplay(index)"
              v-for="(item, index) in proProjects" v-bind:key="item">
              {{ $t(item) }}
              <div class="">
                <span class="" v-for="lang in $t(item + '-lang')" v-bind:key="lang"> {{lang}} </span>
              </div>
          </div>
        </div>
        <div class="projects-pro-each-right" v-show="proDisplay !== ''">
          <p>{{ $t(proDisplay + '-details') }}</p>
          <ul v-if="$t(proDisplay + '-list') !== ' '">
            <li v-for="task in $t(proDisplay + '-list')" v-bind:key="task"> {{task}} • •</li>
          </ul>
          <img :src="require(`@/assets/${$t(proDisplay + '-image')}`)" alt="">
          <div class="projects-pro-each-right-dots"></div>
        </div>
      </div>
      <div v-show="pro == false" class="projects-side">
        <div class="projects-side-description">{{ $t('side-subtitle') }}</div>
        <div class="projects-side-each">
          <div :class="{selected : (selectedProject === item)}" @click="selectedProject = item; selectedImage = 1" class="projects-side-each-name" v-for="item in sideProjects" v-bind:key="item">
            {{ item }}
            <div class="projects-side-each-dots"></div>
          </div>
        </div>
        <div class="projects-side-content">
          <div class="projects-side-content-left">
            <div class="projects-side-content-text">
              {{ $t(selectedProject + '.tech') }}
            </div>
            <div class="projects-side-content-text">
              {{ $t(selectedProject + '.summary') }}
            </div>
          </div>
          <div class="projects-side-content-right">
            <div class="projects-side-content-image">
              <img :src="require(`@/assets/${selectedProject}-${selectedImage}.jpg`)" alt="">
            </div>
            <div class="projects-side-content-thumbnail">
              <div class="">
                <img :class="{selected : (selectedImage === 1)}" @click="selectedImage = 1" :src="require(`@/assets/${selectedProject}-1.jpg`)" alt="">
              </div>
              <div class="">
                <img :class="{selected : (selectedImage === 2)}" @click="selectedImage = 2" :src="require(`@/assets/${selectedProject}-2.jpg`)" alt="">
              </div>
              <div class="">
                <img :class="{selected : (selectedImage === 3)}" @click="selectedImage = 3" :src="require(`@/assets/${selectedProject}-3.jpg`)" alt="">
              </div>
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
    "jitaku-list": ["génération de pdf", "mise en place d'éditeur WYSIWYG", "gestion d'ActiveAdmin", "gestion de devis et de factures", "envoi de mails", "téléchargement de documents", "création d'enquêtes satisfaction", "création de graphiques (chart.js)", "tests", "etc."],
    "jitaku-image": "jitak-project.jpg",
    "packengers": "un projet de site vitrine pour une société de transporteurs innovante",
    "packengers-lang": ["Vue.js"],
    "packengers-list": " ",
    "packengers-image": "pack-project.jpg",
    "packengers-details": "pour ce projet, que j'ai mené de A à Z, j'ai pu améliorer mes compétences en Vue.js, notamment sur la partie Animations/Transitions ainsi que sur la Responsivité car le site a le comportement d'une application mobile.",
    "e-succession": "un projet s'adressant à des particuliers auxquels les notaires font appel pour générer leurs declarations de succession",
    "e-succession-lang": ["Ruby On Rails","Angular 8"],
    "e-succession-list": " ",
    "e-succession-details": "pour ce projet, j'ai participé à la création du back-end de l'application, ainsi qu'à la création des tests, et à la génération du document Cerfa final, généré en PDF. J'ai également eu des missions en front-end, notamment à la création de pages du formulaire, présentant de nombreuses conditions.",
    "e-succession-image": "success-project.jpg",
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
    "jitaku-list": ["génération de pdf", "mise en place d'éditeur WYSIWYG", "gestion d'ActiveAdmin", "gestion de devis et de factures", "envoi de mails", "téléchargement de documents", "création d'enquêtes satisfaction", "création de graphiques (chart.js)", "tests", "etc."],
    "jitaku-image": "jitak-project.jpg",
    "packengers": "un projet de site vitrine pour une société de transporteurs innovante",
    "packengers-lang": ["Vue.js"],
    "packengers-list": " ",
    "packengers-image": "pack-project.jpg",
    "packengers-details": "pour ce projet, que j'ai mené de A à Z, j'ai pu améliorer mes compétences en Vue.js, notamment sur la partie Animations/Transitions ainsi que sur la Responsivité car le site a le comportement d'une application mobile.",
    "e-succession": "un projet s'adressant à des particuliers auxquels les notaires font appel pour générer leurs declarations de succession",
    "e-succession-lang": ["Ruby On Rails","Angular 8"],
    "e-succession-list": " ",
    "e-succession-details": "pour ce projet, j'ai participé à la création du back-end de l'application, ainsi qu'à la création des tests, et à la génération du document Cerfa final, généré en PDF. J'ai également eu des missions en front-end, notamment à la création de pages du formulaire, présentant de nombreuses conditions.",
    "e-succession-image": "success-project.jpg",
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
      proDisplay: 'jitaku'
    }
  },
  mounted() {
    this.selectedProject = 'pauzi';
  },
  methods: {
    proProjectsDisplay(i) {
      if (this.proDisplay === this.proProjects[i]) {
        this.proDisplay = ''
      } else {
        this.proDisplay = this.proProjects[i]
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
  background-color: $main-darker;
  &-container {
    background-color: $second-dark;
    padding-top: 2rem;
    padding-bottom: 2rem;
    // display: flex;
    // flex-direction: column;
    border-left: .5rem solid $second-light;
    border-right: .5rem solid $second-light;
    // justify-content: space-around;
    width: 80%;
    max-width: 880px;
    &-title {
      font-family: $font-black;
      font-size: $size-h2;
      color: $black-dark;
      letter-spacing: 2px;
      position: relative;
      margin-bottom: 5rem;
      border-bottom: .4rem solid $black-dark;
      z-index: 10;
      text-align: center;
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
        font-size: $size-h3;
        &.selected {
          opacity: 1;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url('../assets/blob-green.svg');
          // border-bottom: .4rem solid $black-dark;
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
    &-description {
      width: 80%;
      margin-left: 10%;
      margin-bottom: 2rem;
    }
    &-each {
      display: flex;
      justify-content: space-around;
      &-left {
        border: .4rem solid $black-dark;
        border-radius: 20px;
        width: 15rem;
        padding: .75rem;
        padding-bottom: 2rem;
        position: relative;
        div {
          position: absolute;
          right: 1.5rem;
          bottom: -.8rem;
          display: flex;
          span {
            background-color: $second-dark;
            color: $main-dark;
            font-family: $font-black;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            margin-left: .2rem;
            margin-right: .2rem;
            font-size: .85rem;
          }
        }
        &.selected {
          border: .4rem solid $main-darker;
          // background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FCF7F8' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
          // background-repeat: no-repeat;
          // background-size: contain;
        }
      }
      &-right {
        background-color: $second-light;
        padding: 1rem;
        width: 80%;
        margin-top: 4rem;
        margin-left: 8%;
        position: relative;
        ul {
          margin-left: 3rem;
        }
        img {
          margin-top: 2rem;
          width: 80%;
          margin-left: 10%;
        }
        &-dots {
          position: absolute;
          left: 2rem;
          bottom: .5rem;
          width: 20%;
          height: 20rem;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2386A985' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
      }
    }
  }
  &-side {
    &-description {
      width: 80%;
      margin-left: 10%;
      margin-bottom: 2rem;
    }
    &-content {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &-right {
        min-width: 40%;
      }
      &-left {
        width: 40%;
        margin-left: 5%;
        margin-bottom: 5rem;
        padding: 1rem;
        background-color: $second-light;
      }
      &-text {
        margin-bottom: 2rem;
      }
      &-image {
        img {
          width: 300px;
        }
      }
      &-thumbnail {
        margin-top: .5rem;
        display: flex;
        justify-content: space-around;
        img {
          border: .4rem solid transparent;
          width: 70px;
          &.selected {
            border: .4rem solid $main-dark;
            border-radius: 20px;
          }
        }
      }
    }
    &-each {
      display: flex;
      justify-content: space-around;
      &-name {
        cursor: pointer;
        width: 15rem;
        position: relative;
        font-size: 2rem;
        text-align: center;
        z-index: 10;
        font-family: $font-black;
        letter-spacing: .1rem;
        color: $black-dark;
        &.selected {
          border-bottom: .4rem solid $black-dark;
          // color: $second-light;
          // background-color: $black-dark;
          // background-repeat: no-repeat;
          // background-size: contain;
          .projects-side-each-dots {
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A30B37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
            position: absolute;
            width: 40%;
            height: 100%;
            right: -3rem;
            bottom: -1.5rem;
            display: flex;
            z-index: -1;
          }
        }
      }
      &-right {
        background-color: $second-light;
        padding: 1rem;
        width: 80%;
        margin-top: 4rem;
        margin-left: 8%;
        position: relative;
        ul {
          margin-left: 3rem;
        }
        img {
          margin-top: 2rem;
          width: 80%;
          margin-left: 10%;
        }
        &-dots {
          position: absolute;
          left: 2rem;
          bottom: .5rem;
          width: 20%;
          height: 20rem;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2386A985' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
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
