<template>
<transition name="fade">
  <div v-if="cookies">
    <span>Diese Website verwendet Cookies!</span>
    <span><nuxt-link to="/privacy/">Mehr erfahren</nuxt-link></span>
    <span><button @click="cookies = !cookies">Okay</button></span>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      cookies: true
    };
  }
};
</script>

<style scoped>
div {
  position: fixed;
  background-color: rgba(17, 17, 17, 0.8);
  color: white;
  text-align: center;
  bottom: 30px;
  left: 30px;
  right: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

button {
  background-color: #f68714;
  border: none;
  color: white;
  font-size: 120%;
  cursor: pointer;
  transition: all 1s;
}

button:hover {
  background-color: #3dba6a;
}

.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>