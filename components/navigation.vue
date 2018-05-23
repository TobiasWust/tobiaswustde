<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li :class="{ 'active' : (page === 'index') }">Home</li></nuxt-link>
      <nuxt-link to="/about"><li :class="{ 'active' : (page === 'about') }">Über Mich</li></nuxt-link>
      <nuxt-link to="/blog"><li :class="{ 'active' : (page === 'blog') }">Blog</li></nuxt-link>
      <nuxt-link to="/offer"><li :class="{ 'active' : (page === 'offer') }">Angebot</li></nuxt-link>
      <nuxt-link to="/contact"><li :class="{ 'active' : (page === 'contact') }">Kontakt</li></nuxt-link>
    </ul>    
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page"])
};
</script>

<style scoped>
.active {
  color: orange;
}
a {
  text-decoration: none;
}
li {
  transition: all 1s ease;
  color: white;
  list-style: none;
  display: inline;
  padding-right: 1em;
  padding-left: 1em;
}
</style>