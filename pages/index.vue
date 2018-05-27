<template>
<div>
  <h1>Hi, ich bin<br>Tobias Wust</h1>
  <p>Ich mache</p>
    <ul>
      <li>Websites</li>
      <li>Progressive Webapps</li>
      <li>Games</li>
      <li>SAP ABAP</li>
    </ul>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
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
