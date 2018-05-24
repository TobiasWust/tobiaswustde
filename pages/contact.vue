<template>
  <div>
    <h1>Kontakt</h1>
      <form name="test" method="POST" netlify>
        <label>Email*
          <input name="email" type="email" required />
        </label>
        <label>Message
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
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