<template>
  <div>
      <h2>{{ post.title.rendered }}</h2>
      <nuxt-link :to="post.slug + '/'">{{ post.slug }}</nuxt-link>
      <div v-html="post.excerpt.rendered"></div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
</style>