<template>
  <form
    name="contact" 
    action="/thanks" 
    method="post" 
    netlify
    netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">Name or Business Name</label>
    <input id="name" name="name" type="text" required v-model="name" minlength="3" placeholder="Contact Name">
    <label for="email">Email</label>
    <small>*I will never send unsolicited emails.</small>
    <input id="email" name="email" type="email" required v-model="email" placeholder="Email that I reply to.">
    <label for="website">Current Website Url</label>
    <input id="website" type="url" name="website" v-model="website" placeholder="Leave blank if you don't have one.">
    <label for="inquiry">Inquiry</label>
    <textarea id="inquiry" name="inquiry" required v-model="inquiry"></textarea>
    <button type="submit" class="button--yellow">Send Message</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      website: '',
      inquiry: '',
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 19px;
  padding: 10px;
}

form small {
  font-size: 12px;
}

textarea {
  margin: 7px 0 15px;
  height: 100px;
}

input, textarea {
  width: 100%;
  padding: 7px;
  margin-bottom: 15px;
  margin-top: 7px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #fffaf7;
  color: #fffaf7;
}

button {
  margin: 0 auto;
}
</style>