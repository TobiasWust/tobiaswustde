<template>
  <div>
    <h1>Blog</h1>
    <hr>
        (von blog.tobiaswust.de reingehackt. später was eigenes)
    <wpList />
  </div>
</template>

<script>
import wpList from "~/components/wpList.vue";

export default {
  components: {
    wpList
  }
};
</script>

<style scoped>
</style>