<template>
  <div id="app">

  <!-- page 'links' -->
  <!--<router-link v-bind:to="'/'">Home</router-link>-->
  <!--<router-link :to="'/'">Home</router-link>
  <router-link :to="'/about'">About</router-link>-->
  <Header></Header>

  <!--
    <Header></Header>

      <BodyHero></BodyHero>

    <Footer></Footer> -->

    <!-- page is handled by vue-router -->
    <router-view></router-view>

    <!-- global footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BodyHero from './components/BodyHero.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    BodyHero
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
