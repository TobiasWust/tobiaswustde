<template>
  <nav :class="{ 'indexnav' : (page === 'index') }">
  <img class="logo" src="~/assets/img/monogram.svg">    
    <ul class="navigation">
      <li><nuxt-link exact to="/">HOME</nuxt-link></li>
      <li><nuxt-link to="/about/">ÜBER MICH</nuxt-link></li>
      <li><nuxt-link to="/blog/">BLOG</nuxt-link></li>
      <li><nuxt-link to="/offer/">ANGEBOT</nuxt-link></li>
      <li><nuxt-link to="/contact/">KONTAKT</nuxt-link></li>
    </ul>
    <!-- <img class="icon-menu" src="~/assets/img/icon-menu.svg"> -->
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page"])
  //  :class="{ 'active' : (page === 'index') }"
};
</script>

<style scoped>
.logo {
  margin: 1em 1em;
  height: 30px;
}

nav {
  background-color: #111;
  padding: 2px;
  transition: all 1s ease;
  display: flex;
}

.indexnav {
  background: none;
  transition: all 1s ease;
}

.nuxt-link-active {
  color: #f68714;
}

a {
  text-decoration: none;
  color: white;
  transition: all 1s ease;
}

.icon-menu {
  margin: 1em 1em;
  height: 30px;
  display: none;
  align-self: flex-end;
}

@media (max-width: 1024px) {
  .icon-menu {
    display: inherit;
  }
}

/* ul {
  display: none;
}

@media (min-width: 1024px) {
  ul {
    display: inherit;
  }
} */

.navigation {
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;
}

/* Medium screens */
@media all and (max-width: 800px) {
  .navigation {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    justify-content: space-around;
  }
}

/* Small screens */
@media all and (max-width: 500px) {
  .navigation {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}

li {
  list-style: none;
  display: inline;
  padding-right: 1em;
  padding-left: 1em;
  transition: all 1s ease;
}

a:hover {
  color: #3dba6a;
}
</style>