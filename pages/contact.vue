<template>
  <div class="container">
    <h1 class="title">
      Contact
    </h1>
    <div class="content">
      <no-ssr>
      <form name="contact" action="" method="POST" netlify>
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">
          Message:
        </label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
      </no-ssr>
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