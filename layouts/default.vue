<template>
  <div class="wrapper">
    <header class="header"><navigation/></header>
      <article class="content"  :class="{ 'contentbg' : (page !== 'index') }">      
          <nuxt/>
      </article>
    <footer class="footer"><wu_footer/></footer>
  </div>
</template>

<script>
import navigation from "~/components/navigation.vue";
import wu_footer from "~/components/wu_footer.vue";
import VueMarkdown from "vue-markdown";
import { mapState } from "vuex";

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
  },
  computed: mapState(["page"])
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
  background-color: #111;
  color: #7a7b7c;
  font-size: 130%;
}

h1,
p {
  margin: 0 0 1em 0;
}

.contentbg {
  transition: all 1s ease;
  background-color: #eee;
}

.wrapper {
  background-image: url("~/assets/img/background.jpg");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  transition: all 1s ease;
  flex: 1;
  padding: 1em;
}

footer {
  width: 100%;
  bottom: 0px;
}
</style>


