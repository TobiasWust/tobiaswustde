<template>
<div>
  <h1>Hi, ich bin<br>Tobias Wust</h1>
  <p>Ich mache</p>
    <span class="slider">
      <span class="slide">Websites</span>
      <span class="slide">Progressive Webapps</span>
      <span class="slide">SAP ABAP</span>
    </span>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.slider {
  width: 450px;
  display: flex;
  overflow-x: hidden;
  background-color: #f68714;
}

@keyframes slide {
  0%,
  20% {
    transform: translateX(0px);
  }
  40%,
  60% {
    transform: translateX(-450px);
  }
  80%,
  100% {
    transform: translateX(-900px);
  }
}

.slide {
  animation: slide 8s ease-in-out 2s infinite alternate;
  width: 450px;
  flex-shrink: 0;
  text-align: center;
}

div {
  color: white;
  font-size: 150%;
}

h1 {
  color: white;
  text-align: left;
}
ul {
  display: inline-block;
  width: 450px;
  position: relative;
}
li {
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  /* position: absolute;
  top: 0;
  left: 0; */
  list-style: none;
  background-color: #f68714;
  color: white;
}
</style>
