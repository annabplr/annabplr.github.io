<template>
  <div id="app">
    COUCOU
    <!-- <Menu ref="menu" v-if="ableScroll() || mobileDisplay()" :position= "scrollPosition" :previousPosition= "previousscrollPosition" v-on:navbarNavigation="navbarNavigation" /> -->
    <!-- <transition :name="transitionName">
      <router-view :firstLoad="createdApp" :lastPosition="scrollPosition"></router-view>
    </transition> -->
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  methods: {
  },
  created () {
    this.createdApp = true;
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated() {
  },
  destroyed () {
  },
  data: function() {
    return {
      transitionName: "normal",
      previousscrollPosition: 0,
      scrollPosition: 0,
      maxScrollPosition: 8,
      isScrolling: false,
      displayArrow: true,
      createdApp: false
    };
  },
}
</script>

<style lang="scss">
// @import './variables';


</style>
