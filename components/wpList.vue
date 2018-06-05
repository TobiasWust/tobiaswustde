<template>
  <div class="blog">
    <div v-for="post in posts" :key="post.id">
      <wpPostExcerpt :post="post" />
      <hr>
    </div>
  </div>
</template>

<script>
import wpPost from "~/components/wpPostExcerpt.vue";

export default {
  name: "wpList",
  data() {
    return {
      posts: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          "https://blog.tobiaswust.de/wp-json/wp/v2/posts/"
        );
        const posts = await res.json();
        this.posts = posts;
        console.log(posts);
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: {
    wpPostExcerpt
  }
};
</script>

<style scoped>
.blog {
  font-size: 100%;
}
</style>