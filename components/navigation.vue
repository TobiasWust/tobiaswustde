<template>
  <nav>
    <ul>
      <li><nuxt-link exact to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about/">Über Mich</nuxt-link></li>
      <li><nuxt-link to="/blog/">Blog</nuxt-link></li>
      <li><nuxt-link to="/offer/">Angebot</nuxt-link></li>
      <li><nuxt-link to="/contact/">Kontakt</nuxt-link></li>
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
nav {
  background-color: #111;
  padding: 2px;
}

.nuxt-link-active {
  color: orange;
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