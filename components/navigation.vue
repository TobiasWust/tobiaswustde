<template>
  <nav>
    <ul>
      <nuxt-link exact to="/"><li>Home</li></nuxt-link>
      <nuxt-link to="/about"><li>About Me</li></nuxt-link>
      <nuxt-link to="/blog"><li>Blog</li></nuxt-link>
      <nuxt-link to="/contact"><li>Contact</li></nuxt-link>
    </ul>    
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: none;
  display: inline;
}
</style>