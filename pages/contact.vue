<template>
  <div>
    <h1>Kontakt</h1>
    <form netlify>
      <label>Email*
      <input name="email" type="email" required /></label>
      <label>Name
      <input name="name" type="text"></label>
      <label>Text*
      <textarea name="message" /></label>
      <button type="submit">Senden</button>
    </form>
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