<template>
  <div class="container">
    <h1 class="title">
      Kontakt
    </h1>
    <hr>
    <div class="content">
      <form name="contact" action="/success/" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label>Email*<input name="email" id="email" placeholder="Email" required /></label> 
        <label>Name<input name="name" id="name" placeholder="Name" /></label>               
        <label>Nachricht<textarea class="form-field" name="message" id="message" rows="6" placeholder="Deine Nachricht"></textarea></label>        
        <input class="form-button" type="submit" value="Senden" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  font-weight: bold;
}
input,
textarea {
  width: 100%;
  border: none;
  padding: 10px;
}

.form-button {
  color: white;
  background-color: #f68714;
  border: none;
  width: 200px;
  height: 40px;
  transition: all 0.3s ease;
}

.form-button:hover {
  background-color: #3dba6a;
}
</style>