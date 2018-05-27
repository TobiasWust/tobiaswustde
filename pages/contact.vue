<template>
  <div class="container">
    <h1 class="title">
      Kontakt
    </h1>
    <div class="content">
      <form name="contact" action="/success/" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label>Email*<input name="email" id="email" /></label> 
        <label>Name<input name="name" id="name" /></label>               
        <label>Nachricht<textarea class="form-field" name="message" id="message"></textarea></label>        
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input,
textarea {
  width: 100%;
}
</style>