<template>
  <div class="projects">
    <h2>{{ $t('title') }}</h2>
    <h3>{{ $t('subtitle-1') }}</h3>
    <h3>{{ $t('subtitle-2') }}</h3>
    <div class="projects-buttons">
      <div @click="selectedProject = item" class="projects-buttons-each" v-for="item in projects" v-bind:key="item">
        {{ item }}
      </div>
    </div>
    <div class="projects-content">
      <div class="projects-content-left">

        <h3 class="projects-content-title">
          {{ selectedProject }}
        </h3>
        <div class="projects-content-text">
          {{ $t(selectedProject + '.text') }}
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
</template>

<i18n>
{
  "fr": {
    "title": "side projects",
    "subtitle-1": "je ne peux divulguer le contenu des derniers projets sur lesquels j’ai travaillé de manière professionnelle.",
    "subtitle-2": "les projets ci-dessous sont mes projets personnels.",
    "pauzi": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "batchka": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "jolies-dates": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  "en": {
    "title": "side projects",
    "subtitle-1": "i can't divulguer le contenu des derniers projets sur lesquels j’ai travaillé de manière professionnelle.",
    "subtitle-2": "les projets ci-dessous sont mes projets personnels.",
    "pauzi": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "batchka": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "jolies-dates": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
}
</i18n>

<script>
export default {
  name: 'Projects',
  data: function() {
    return {
      projects: ["pauzi", "batchka", "jolies-dates"],
      selectedProject: 'pauzi',
      selectedImage: 1
    }
  },
  mounted() {
    this.selectedProject = 'pauzi';
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

.projects {
  &-buttons {
    display: flex;
    justify-content: space-around;
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
