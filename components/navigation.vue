<template>
  <nav>
    <ul>
      <li :class="{ 'active' : (page === 'index') }"><nuxt-link exact to="/">Home</nuxt-link></li>
      <li :class="{ 'active' : (page === 'about') }"><nuxt-link to="/about">Über Mich</nuxt-link></li>
      <li :class="{ 'active' : (page === 'blog') }"><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li :class="{ 'active' : (page === 'offer') }"><nuxt-link to="/offer">Angebot</nuxt-link></li>
      <li :class="{ 'active' : (page === 'contact') }"><nuxt-link to="/contact">Kontakt</nuxt-link></li>
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
  color: white;
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