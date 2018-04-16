<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <!-- logo -->
        <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="shneh" width="112" height="28">
        </a>

        <!-- dropdown menu 
            must be last child of navbar-brand -->
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="onBurgerClicked" :class="{'is-active': showMobileMenu}">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="myItems" class="navbar-menu" :class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
            <!--<a class="navbar-item is-active">Home</a>
            <a class="navbar-item">Item 1</a>
            <a class="navbar-item">Item 2</a>-->
            <router-link :to="'/'" class="navbar-item">Home</router-link>
            <router-link :to="'/about'" class="navbar-item">About</router-link>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false
        }
    },

    methods: {
        onBurgerClicked() {
            this.showMobileMenu = !this.showMobileMenu;
        }
    }
}
</script>

<style lang="scss">
</style>
