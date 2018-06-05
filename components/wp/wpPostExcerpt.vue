<template>
  <div>
      <h2>{{ post.title.rendered }}</h2>
      <nuxt-link :to="post.id + '/'">{{ post.id }}</nuxt-link>
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