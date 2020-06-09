<template>
  <div class="projects">
    <div class="projects-container">
      <h2 class="projects-container-title">
        {{ $t('title') }}
        <div class="projects-container-title-dots"></div>
      </h2>
      <transition name="projects-buttons">
        <div class="projects-buttons">
          <div class="projects-buttons-div">
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
        </div>
      </transition>
      <div v-show="pro == true" class="projects-pro">
        <div class="projects-pro-description">{{ $t('projects-subtitle') }}</div>
        <div class="projects-pro-each">
          <div :class="{selected : (proDisplay === proProjects[index])}"
              class="projects-pro-each-left"
              @click= "proProjectsDisplay(index)"
              v-for="(item, index) in proProjects" v-bind:key="item">
              <div class="projects-pro-each-type">
                {{ $t(item + '-type') }}
              </div>
              <div class="projects-pro-each-desc">
                {{ $t(item) }}
              </div>
              <div class="projects-pro-each-lang">
                <span class="" v-for="lang in $t(item + '-lang')" v-bind:key="lang"> {{lang}} </span>
              </div>
          </div>
        </div>
        <div class="projects-pro-each-desc-mobile">
          {{ $t(proDisplay) }}
        </div>
        <div class="projects-pro-each-right" v-show="proDisplay !== ''">
          <div class="projects-pro-each-right-text">
            <p>{{ $t(proDisplay + '-details') }}</p>
            <ul v-if="$t(proDisplay + '-list') !== ' '">
              <li v-for="task in $t(proDisplay + '-list')" v-bind:key="task"> {{task}}</li>
            </ul>
          </div>
          <div class="projects-pro-each-right-image">
            <img @click= "displayModale = true" :src="require(`@/assets/${$t(proDisplay + '-image')}`)" alt="pro project screenshot">
            <div class="projects-pro-each-right-dots"></div>
            <div v-if="displayModale" @click= "displayModale = !displayModale" class="projects-pro-each-right-modale">
              <img :src="require(`@/assets/${$t(proDisplay + '-image')}`)" alt="pro project screenshot in full size">
            </div>
          </div>
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
              <img @click="displaySideModale = true" :src="require(`@/assets/${selectedProject}-${selectedImage}.jpg`)" alt="side project screenshot">
              <div v-if="displaySideModale" @click= "displaySideModaleFunction()" class="projects-side-content-image-modale">
                <img :src="require(`@/assets/${selectedProject}-${selectedImage}.jpg`)" alt="side project screenshot in fullscreen">
                <div class="projects-side-content-image-modale-close" @click="displaySideModale= !displaySideModale">X</div>
              </div>
            </div>
            <div class="projects-side-content-thumbnail">
              <div class="">
                <img :class="{selected : (selectedImage === 1)}" @click="selectedImage = 1" :src="require(`@/assets/${selectedProject}-1.jpg`)" alt="thumbnail for side project screenshot">
              </div>
              <div class="">
                <img :class="{selected : (selectedImage === 2)}" @click="selectedImage = 2" :src="require(`@/assets/${selectedProject}-2.jpg`)" alt="thumbnail for side project screenshot">
              </div>
              <div class="">
                <img :class="{selected : (selectedImage === 3)}" @click="selectedImage = 3" :src="require(`@/assets/${selectedProject}-3.jpg`)" alt="thumbnail for side project screenshot">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div @click="displayNextProject()" class="projects-container-next">
        <img :src="require(`@/assets/arrow.svg`)" alt="arrow to next project">
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "fr": {
    "title": "expérience",
    "projects": "expérience professionnelle",
    "projects-subtitle": "Depuis 2019, je travaille en tant que Développeuse Web FullStack au sein de l'agence web Kinoba (Lyon). J'ai eu l'opportunité de travailler principalement sur 3 gros projets :",
    "jitaku-type": "web-app",
    "jitaku": "plateforme de gestion globale de l'activité des promoteurs immobiliers",
    "jitaku-lang": ["Ruby On Rails", "AngularJs"],
    "jitaku-details": "pour ce projet très conséquent, j'ai participé à l'amélioration de fonctionnalités existantes et à l'ajout de nouvelles fonctionnalités, tant en back qu'en front, sur des thématiques très diverses :",
    "jitaku-list": ["génération de pdf", "mise en place d'éditeur WYSIWYG", "gestion d'ActiveAdmin", "gestion de devis et de factures", "envoi de mails", "téléchargement de documents", "création d'enquêtes satisfaction", "création de graphiques (chart.js)", "tests, etc."],
    "jitaku-image": "jitak-project.jpg",
    "packengers-type": "site vitrine",
    "packengers": "société de transport innovante",
    "packengers-lang": ["Vue.js"],
    "packengers-list": " ",
    "packengers-image": "pack-project.jpg",
    "packengers-details": "pour ce projet, que j'ai mené de A à Z, j'ai pu améliorer mes compétences en Vue.js, notamment sur la partie Animations/Transitions ainsi que sur la Responsivité car le site a le comportement d'une application mobile.",
    "e-succession-type": "web-app",
    "e-succession": "génération de declarations de succession pour les notaires",
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
    "projects-subtitle": "Since 2019, I'm working at Kinoba, a web agency based in Lyon (FR), as a Full Stack Web Developer. I've had the opportunity to work on mostly 3 big projects:",
    "jitaku-type": "web-app",
    "jitaku": "real-estate and building delivery global management platform",
    "jitaku-lang": ["Ruby On Rails", "AngularJs"],
    "jitaku-details": "For this huge project, I've worked to improve existing functionalities and to add new ones, in back-end and front-end, and on very different themes :",
    "jitaku-list": ["pdf generation", "WYSIWYG editor", "ActiveAdmin management", "quotes and invoices management", "e-mails sending", "document upload and download", "survey creation", "charts creation (chart.js)", "testing, etc."],
    "jitaku-image": "jitak-project.jpg",
    "packengers-type": "web-site",
    "packengers": "innovative transport company",
    "packengers-lang": ["Vue.js"],
    "packengers-list": " ",
    "packengers-image": "pack-project.jpg",
    "packengers-details": "For this project, leads from A to Z, I had the opportunity to improve my Vue.js skills, mostly on Animations/Transitions parts and on the website Responsivity as this website has the behaviour of a mobile app.",
    "e-succession-type": "web-app",
    "e-succession": "successoral declarations generation for notaries",
    "e-succession-lang": ["Ruby On Rails","Angular 8"],
    "e-succession-list": " ",
    "e-succession-details": "For this project, I work mostly on the back-end (database creation, models and controllers), on tests creation, and on the finale pdf generation. I also worked on the front-end part : components creation for the form, with a lot of conditions.",
    "e-succession-image": "success-project.jpg",
    "side": "side projects",
    "side-subtitle": "on my personal time, and to improve my skills, I've developped 2 web-apps :",
    "pauzi": {
      "tech": "Pauzi is a Progressive Web App, developped in Ruby on Rails and Vue.js, with a mobile-first design.",
      "summary": "Pauzi is a web-app to bring positivity in your life. It allows to save every day a positive thought or a new knowledge learn during the day, and allow the user to read them again whenever you feel bad."
    },
    "batchka": {
      "tech": "batchka is a Progressive Web App developped in Ruby on Rails, without front framework, with a mobile-first design.",
      "summary": "Batchka allows you to plan your menu of the week. one of its most important functionnality is to generate a menu for the week, a grocery store list, and a to-do list thanks to the choices you made initially. "
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
      proDisplay: 'jitaku',
      displayModale: false,
      displaySideModale: false
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
    },
    displaySideModaleFunction() {
      if (this.selectedImage !== 3) {
        this.selectedImage += 1
      }
      else {
        this.displaySideModale = !this.displaySideModale
      }
    },
    displayNextProject() {
      if (this.pro === true) {
        if (this.proDisplay === "jitaku") {
          this.proDisplay = "packengers"
        } else if (this.proDisplay === "packengers") {
          this.proDisplay = "e-succession"
        } else if (this.proDisplay === "e-succession") {
          this.pro = false
          this.selectedProject = "pauzi"
        }
      } else {
        if (this.selectedProject === "pauzi") {
          this.selectedProject = "batchka"
        } else if (this.selectedProject === "batchka") {
          this.pro = true
          this.proDisplay = "jitaku"
        }
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
    border-left: .5rem solid $second-light;
    border-right: .5rem solid $second-light;
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
      @media(max-width:767px){
        text-align: right;
        padding-right: 3rem;
        margin-bottom: 2rem;
      }
      &-dots {
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FCF7F8' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        z-index: -1;
        position: absolute;
        top: 0;
        right: 10%;
        width: 30%;
        height: 6rem;
        @media(max-width:767px){
          height: 100%;
          right: 0;
        }
      }
    }
    &-next {
      float: right;
      background-image: url('../assets/blob-shape-4.svg');
      background-size: cover;
      padding: 2rem;
      width: 2rem;
      img {
        width: 2rem;
        margin-left: 30%;
      }
    }
  }
  &-buttons {
    background-color: $second-light;
    &-div {
      margin: 2rem auto;
      display: flex;
      justify-content: space-between;
      width: 60%;
      @media(max-width:767px){
        width: 80%;
      }
    }
    &-each {
      cursor: pointer;
      &-name {
        margin: 0;
        z-index: 1;
        padding: 2rem;
        opacity: .3;
        font-size: $size-h3;
        @media(max-width:767px){
          font-size: 1.5rem;
          padding: .5rem;
          padding-left: 1rem;
        }
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
      @media(max-width:767px){
        // flex-direction: column;
      }
      &-left {
        border: .4rem solid $black-dark;
        border-radius: 20px;
        width: 13rem;
        padding: 1rem;
        padding-bottom: 2rem;
        position: relative;
        cursor: pointer;
        @media(max-width:767px){
          border: .3rem solid $black-dark;
          width: 80%;
          margin-left: 2.5%;
          margin-right: 2.5%;
          padding-bottom: 1.25rem;
          margin-bottom: 1rem;
          display: flex;
        }
        &.selected {
          border: .4rem solid $main-darker;
          @media(max-width:767px){
            border: .3rem solid $main-darker;
          }
          .projects-pro-each-type {
            background-color: $second-light;
            opacity: 1;
          }
          @media(max-width:767px){
            .projects-pro-each-desc {
              display: none;
            }
          }
          // background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FCF7F8' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
          // background-repeat: no-repeat;
          // background-size: contain;
        }
      }
      &-type {
        width: 60%;
        padding-left: .5rem;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: .9rem;
        margin-bottom: 0.5rem;
        opacity: .5;
        @media(max-width:767px){
          font-size: 1.25rem;
          line-height: .7rem;
          margin-bottom: .25rem;
          width: 100%;
        }
      }
      &-desc {
        @media(max-width:767px){
          margin-left: .5rem;
          display: none;
        }
        &-mobile {
          display: none;
          @media(max-width:767px) {
            width: 70%;
            margin-left: 15%;
            margin-top: .5rem;
            padding-top: .5rem;
            display: block;
            font-size: 1.25rem;
            min-height: 3rem;
            font-family: $font-medium;
            padding-left: .25rem;
            border-left: .35rem solid $main-darker;
          }
        }
      }
      &-lang {
        position: absolute;
        right: 1.5rem;
        bottom: -.8rem;
        display: flex;
        @media(min-width:421px) and (max-width:767px){
          flex-direction: column;
          right: 1rem;
          bottom: -.4rem;
          // background-color: $second-dark;
        }
        @media(max-width:420px){
          flex-direction: column;
          right: .55rem;
          bottom: -.3rem;
        }
        span {
          background-color: $second-dark;
          color: $main-dark;
          font-family: $font-black;
          padding-left: 0.25rem;
          padding-right: 0.25rem;
          margin-left: .2rem;
          margin-right: .2rem;
          font-size: .85rem;
          @media(min-width:421px) and (max-width:767px){
            text-align: right;
            font-size: .6rem;
            line-height: 1;
          }
          @media(max-width:420px){
            text-align: right;
            font-size: .5rem;
            line-height: .8;
            padding-left: 0.1rem;
            padding-right: 0.1rem;
            margin-left: .1rem;
            margin-right: .1rem;
          }
        }
      }
      &-right {
        display: flex;
        width: 80%;
        padding: 1rem;
        margin-top: 2rem;
        margin-left: 8%;
        @media(max-width:767px){
          flex-direction: column-reverse;
          margin-left: 5%;
          margin-top: 1rem;
        }
        &-text {
          padding: 1rem;
          background-color: $second-light;
          min-width: 360px;
          min-height: 290px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          @media(max-width:767px){
            min-width: auto;
            width: 100%;
            min-height: auto;
            margin-top: 1rem;
          }
          p {
            @media(max-width:767px){
              margin: 0;
            }
          }
          ul {
            margin-left: 3rem;
            @media(max-width:767px){
              columns: 2;
              margin-left: .5rem;
              font-size: .8rem;
            }
          }
        }
        &-image {
          position: relative;
          display: flex;
          align-items: center;
        }
        img {
          width: 95%;
          margin-left: 5%;
        }
        &-dots {
          position: absolute;
          right: -1rem;
          bottom: 20%;
          width: 20%;
          height: 60%;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A30B37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
          @media(max-width:767px){
            height: 100%;
            bottom: -5%;
          }
        }
        &-modale {
          z-index: 100;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(70, 72, 73, .8);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 80%;
            margin-left: 0;
            @media(max-width:767px){
              transform: rotate(90deg);
              width: 80vh;
            }
          }
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
      @media(max-width:767px){
        flex-direction: column-reverse;
      }
      &-right {
        min-width: 40%;
      }
      &-left {
        width: 40%;
        margin-left: 5%;
        margin-bottom: 5rem;
        padding: 1rem;
        background-color: $second-light;
        @media(max-width:767px){
          margin-left: 0;
          width: 80%;
          margin-bottom: 1rem;
        }
      }
      &-text {
        margin-bottom: 2rem;
        @media(max-width:767px){
          margin-bottom: 1rem;
        }
      }
      &-image {
        img {
          width: 350px;
          height: 350px;
          object-fit: cover;
          object-position: 0% 18%;
          @media(max-width:767px){
            width: 80%;
            height: 180px;
            margin-left: 10%;
          }
        }
        &-modale {
          z-index: 100;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(70, 72, 73, .8);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            object-fit: contain;
            width: auto;
            height: 80%;
          }
          &-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: $second-light;
            cursor: pointer;
          }
        }
      }
      &-thumbnail {
        margin-top: .5rem;
        display: flex;
        justify-content: space-around;
        img {
          border: .4rem solid transparent;
          width: 70px;
          height: 70px;
          object-fit: cover;
          object-position: 0% 18%;
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
        opacity: .7;
        @media(max-width:767px){
          font-size: 1.5rem;
          width: auto;
          padding: .5rem 1.5rem;
        }
        &.selected {
          opacity: 1;
          border-bottom: .4rem solid $black-dark;
          @media(max-width:767px){
            background-color: $second-light;
          }
          // color: $second-light;
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
            @media(max-width:767px){
              right: -1.5rem;
              bottom: -1rem;
              width: 35%;
              height: 120%;
            }
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
