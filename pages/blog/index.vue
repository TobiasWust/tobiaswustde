<template>
  <div>
    <h1>Blog</h1>
    <hr>
        von blog.tobiaswust.de reingehackt.
    <wpList />
  </div>
</template>

<script>
import wpList from "~/components/wp/wpList.vue";

export default {
  components: {
    wpList
  }
};
</script>

<style scoped>
</style>