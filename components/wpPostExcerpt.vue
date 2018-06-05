<template>
  <div>
      <h2>{{ post.title.rendered }}</h2>
      <a :href="post.id">{{ post.id }}</a>
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