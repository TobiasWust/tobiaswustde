<template>
  <div>
    <nuxt-link exact to="/privacy/">Datenschutz</nuxt-link> |
    <nuxt-link exact to="/legal/">AGB</nuxt-link> |
    <nuxt-link exact to="/imprint/">Impressum</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nuxt-link-active {
  color: #111;
}
a {
  color: white;
  text-decoration: none;
}
div {
  text-align: center;
  background-color: #3dba6a;
  color: white;
}
</style>