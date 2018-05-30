<template>
<transition name="fade">
  <div v-if="cookies">
    Diese Website verwendet Cookies! Okay für dich? <button @click="cookies = !cookies">Okay</button>
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
  background-color: #111;
  color: white;
  text-align: center;
  bottom: 30px;
  left: 30px;
  right: 30px;
  padding: 10px;
}

button {
  background-color: #f68714;
  border: none;
  color: white;
  font-size: 120%;
}

.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>