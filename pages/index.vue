<template>
<div>
  <h1>Hi, ich bin Tobias Wust {{ page }}</h1>
  <p>Ich mache
    <ul>
      <li>Websites</li>
      <li>Progressive Webapps</li>
      <li>Games</li>
      <li>SAP ABAP</li>
    </ul>
  </p>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page"])
};
</script>

<style scoped>
div {
  color: #ddd;
}

ul {
  background-color: orange;
}

li {
  list-style: none;
}
</style>
