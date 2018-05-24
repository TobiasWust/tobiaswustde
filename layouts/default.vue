<template>
  <div class="wrapper">
    <header class="header"><navigation/></header>
      <article class="content">      
          <nuxt/>
      </article>
    <footer class="footer"><wu_footer/></footer>
  </div>
</template>

<script>
import navigation from "~/components/navigation.vue";
import wu_footer from "~/components/wu_footer.vue";
import VueMarkdown from "vue-markdown";

export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    navigation,
    wu_footer,
    VueMarkdown
  }
};
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Open Sans", "sans-serif";
  /* background-image: url("~/assets/img/background.jpg"); */
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-color: #444;
  color: #fff;
  font-size: 150%;
}

h1,
p {
  margin: 0 0 1em 0;
}

/* .wrapper {
  max-width: 940px;
  margin: 0 20px;
  display: grid;
  grid-gap: 10px;
} */

/* .wrapper > * {
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  /* needed for the floated layout
  margin-bottom: 10px;
} */

/* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
/* @supports (display: grid) {
  .wrapper > * {
    width: auto;
    margin: 0;
  }
} */

footer {
  width: 100%;
}
</style>


