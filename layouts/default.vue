<template>
  <div class="wrapper">
    <header class="header">
      <navigation />
    </header>
    <article class="content" :class="{ 'contentbg' : (page !== 'index') }">
      <nuxt />
    </article>
    <footer class="footer">
      <wu_footer />
    </footer>
    <cookienotice />
  </div>
</template>

<script>
import cookienotice from "~/components/cookienotice.vue";
import navigation from "~/components/navigation.vue";
import wu_footer from "~/components/wu_footer.vue";
import VueMarkdown from "vue-markdown";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    cookienotice,
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
  font-family: "Work Sans", "sans-serif";
  background-repeat: no-repeat;
  background-color: #111;
  color: #999;
  font-size: 130%;
}
h1 {
  color: #111;
  text-align: center;
  margin: 0 0 0 0;
}
h2 {
  color: #888;
}
h1,
h2 {
  font-family: "Vidaloka", "serif";
}

hr {
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    #3dba6a,
    rgba(0, 0, 0, 0)
  );
  width: 30%;
}

.contentbg {
  transition: all 1s ease;
  background-color: #eee;
}

.wrapper {
  /* background-image: url("~/assets/img/background.jpg"); dev */
  background-image: url("https://res.cloudinary.com/tobiaswust/image/upload/c_scale,f_auto,q_auto:good,w_1440/v1527682422/tobiaswust.de/IMG_1080.jpg");
  background-repeat: no-repeat;
  background-position: 60% 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
}

/* Medium screens */
@media all and (max-width: 1440px) {
  .wrapper {
    background-size: auto;
  }
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

a {
  color: #999;
  text-decoration-color: #3dba6a;
}

a:hover {
  color: #3dba6a;
}

.material {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 2px 7px 0 rgba(0, 0, 0, 0.12),
    0 5px 3px -5px rgba(0, 0, 0, 0.2);
}
</style>


