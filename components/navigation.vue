<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li>Home</li></nuxt-link>
      <nuxt-link to="/about"><li>Über Mich</li></nuxt-link>
      <nuxt-link to="/blog"><li>Blog</li></nuxt-link>
      <nuxt-link to="/offer"><li>Angebot</li></nuxt-link>
      <nuxt-link to="/contact"><li>Kontakt</li></nuxt-link>
    </ul>    
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  color: white;
  list-style: none;
  display: inline;
  padding-right: 1em;
  padding-left: 1em;
}
</style>