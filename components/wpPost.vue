<template>
  <div>
      <h2>{{ post.title.rendered }}</h2>
      <p v-html="post.excerpt.rendered"></p>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
</style>