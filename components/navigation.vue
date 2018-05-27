<template>
  <nav :class="{ 'indexnav' : (page === 'index') }">
    
    <ul>
      <li><img src="~/assets/img/monogram.svg"></li>
      <li><nuxt-link exact to="/">HOME</nuxt-link></li>
      <li><nuxt-link to="/about/">ÜBER MICH</nuxt-link></li>
      <li><nuxt-link to="/blog/">BLOG</nuxt-link></li>
      <li><nuxt-link to="/offer/">ANGEBOT</nuxt-link></li>
      <li><nuxt-link to="/contact/">KONTAKT</nuxt-link></li>
    </ul>    
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
img {
  display: inline-block;
  height: 30px;
}
nav {
  background-color: #111;
  padding: 2px;
  transition: all 1s ease;
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